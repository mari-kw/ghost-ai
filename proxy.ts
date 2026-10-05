import { clerkMiddleware } from "@clerk/nextjs/server";
import { signInUrl, signUpUrl } from "@/lib/auth-paths";

const authPaths = [signInUrl, signUpUrl];

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;
  const isPublicRoute = authPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (!isPublicRoute) await auth.protect();
}, { signInUrl, signUpUrl });

export const config = {
  matcher: [
    // Only framework assets and the app icon bypass authentication.
    "/((?!_next/static/|_next/image$|favicon\\.ico$).*)",
    "/(api|trpc)(.*)",
  ],
};
