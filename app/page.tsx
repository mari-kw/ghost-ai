import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/** Redirects authenticated visitors to the editor and other visitors to sign in. */
export default async function Home() {
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();

  redirect("/editor");
}
