import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { constrainedMemory } from "process";
import { authOptions } from "../../../lib/nextAuthOptions";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}