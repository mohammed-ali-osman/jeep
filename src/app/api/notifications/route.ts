import { NextResponse } from "next/server";
import pool from "@/lib/db";

export interface Data {
  id: string;
  title: string;
  img?: string,
  message: string;
  url?: string;
  timestamp: string;
  is_read: boolean;
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1200));

const query = `
  SELECT
    id,
    title,
    message,
    url,
    img,
    is_read,
    timestamp
  FROM notifications
  ORDER BY is_read ASC, timestamp DESC
  LIMIT 4;
`;

  const { rows } = await pool.query(query);

  return NextResponse.json(rows); // [null]
}