import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname == ('/signup')) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }
 
}