import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Required function export
export function middleware(request: NextRequest) {
  // For now, just let the request continue
  return NextResponse.next();
}

// Optional matcher config
export const config = {
  matcher: ["/supabase/welcome", "/supabase/todos"],
};
