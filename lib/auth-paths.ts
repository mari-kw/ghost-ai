function localAuthPath(value: string | undefined, fallback: string) {
  const path = (value || fallback).replace(/\/+$/, "");

  if (!/^\/(?!\/)[^?#\\\s]+$/.test(path)) {
    throw new Error("Clerk auth URLs must be local paths, such as /sign-in and /sign-up.");
  }

  return path;
}

export const signInUrl = localAuthPath(
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  "/sign-in",
);

export const signUpUrl = localAuthPath(
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  "/sign-up",
);
