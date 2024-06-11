import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default function Middleware(req: NextRequest) {
  const cookie = cookies()
  const url = req.nextUrl.clone()
  console.log(url)
  if(req.nextUrl.pathname.startsWith('/home')) {
    if(!cookie.get('API_TOKEN')) {
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }else if(req.nextUrl.pathname === '/') {
    if(cookie.get('API_TOKEN')) {
      url.pathname = '/home'
      return NextResponse.redirect(url)
    }
  }
}