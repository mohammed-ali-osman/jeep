// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const q = searchParams.get("q")?.trim() || null;
    const deptParam = searchParams.get("department")?.trim() || null;

    // Treat 'All', empty string, or null as no department filter
    const department =
      deptParam && deptParam.toLowerCase() !== "all" ? deptParam : null;

    let tagMatch: { id: string; name: string; count: number } | undefined = undefined;
    let matchedTagId: string | null = null;

    // 1. AUTO-DETECT MATCHING TAG
    if (q) {
      const tagSql = `
        SELECT 
          t.id, 
          t.name, 
          COUNT(pt.product_id)::int AS count
        FROM tags t
        LEFT JOIN product_tags pt ON t.id = pt.tag_id
        WHERE t.name ILIKE '%' || $1 || '%'
        GROUP BY t.id, t.name
        LIMIT 1;
      `;

      const tagRes = await pool.query(tagSql, [q]);

      if (tagRes.rows.length > 0) {
        tagMatch = {
          id: tagRes.rows[0].id,
          name: tagRes.rows[0].name,
          count: tagRes.rows[0].count,
        };
        matchedTagId = tagRes.rows[0].id;
      }
    }

    // 2. FETCH PRODUCTS (Product Name, Store Name, Tag Name, or Matched Tag ID + Department)
    const productSql = `
      SELECT DISTINCT
        p.id,
        p.name,
        p.department,
        p.trending
      FROM products p
      JOIN stores s ON p.store_id = s.id
      LEFT JOIN product_tags pt ON p.id = pt.product_id
      LEFT JOIN tags t ON pt.tag_id = t.id
      WHERE 
        (
          $1::text IS NULL 
          OR p.name ILIKE '%' || $1 || '%'
          OR s.name ILIKE '%' || $1 || '%'
          OR t.name ILIKE '%' || $1 || '%'
          OR ($2::uuid IS NOT NULL AND pt.tag_id = $2::uuid)
        )
        AND
        ($3::text IS NULL OR p.department ILIKE $3)
      ORDER BY p.name ASC;
    `;

    const { rows: products } = await pool.query(productSql, [
      q,
      matchedTagId,
      department,
    ]);

    return NextResponse.json({
      tag: tagMatch,
      products,
    });
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}