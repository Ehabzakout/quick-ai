import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 flex min-h-16 items-center justify-between px-10 backdrop-blur-3xl">
      <Link href={"/"}>
        <Logo />
      </Link>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" oauthFlow="popup">
          <Button className="rounded-full">Get Started</Button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
}
