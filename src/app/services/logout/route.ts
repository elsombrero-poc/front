import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const url = req.nextUrl.clone()
  url.pathname = '/'
  cookies().delete('API_TOKEN')
  return NextResponse.redirect(url)
}