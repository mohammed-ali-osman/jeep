import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

export async function GET() {
    const challenge = randomBytes(32);

    const options = {
        challenge: challenge.toString("base64url"),
        rpId: "localhost",
        timeout: 60000,
        userVerification: "required",
    };

    return NextResponse.json(options);
}