import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {getOrCreateDB} from "@/models/Database/DbSetup"


export async function middleware(request: NextRequest) {

  
  await Promise.all([
    getOrCreateDB()
  ])
  
  if (request.nextUrl.pathname == ('/signup')) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }

  return NextResponse.next()
 
}


// See "Matching Paths" below to learn more
export const config = {
  /* match all request paths except for the the ones that starts with:
  - api
  - _next/static
  - _next/image
  - favicon.ico

  */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}