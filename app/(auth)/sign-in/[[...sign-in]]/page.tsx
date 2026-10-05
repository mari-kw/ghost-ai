import { SignIn } from "@clerk/nextjs";

/** Renders Clerk's sign-in flow for the catch-all sign-in route. */
export default function SignInPage() {
  return <SignIn />;
}
