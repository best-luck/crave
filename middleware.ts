import { getSessionData } from '@src/lib/session/getSession';
import { setSessionData } from '@src/lib/session/setSession';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await getSessionData();
  if (pathname.startsWith('/admin')) {
    if (!pathname.startsWith('/admin/login') && !session.loggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  } else {
    const authRoutes = ["/signin", "/signup", "/forgot-password", "/new-password"];
    if (authRoutes.find(route => pathname.startsWith(route))) {
      if (session.user) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } else {
      // if (!session.user) {
      //   return NextResponse.redirect(new URL('/signin', request.url));
      // }
    }
  }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}