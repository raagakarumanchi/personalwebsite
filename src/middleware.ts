/* Private middleware – do not expose on GitHub */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Use a type assertion (or a custom type) to read geo (country, region, city) from the request.
  const { country, region, city } = (req as any).geo || {};

  // Example: store region (state) in a cookie so the client can read it
  const res = NextResponse.next();
  if (region) res.cookies.set('user-region', region, { sameSite: 'lax' });

  return res;
}

export const config = {
  // run on every route except Next.js assets (i.e. /_next/*)
  matcher: '/((?!_next).*)',
}; 