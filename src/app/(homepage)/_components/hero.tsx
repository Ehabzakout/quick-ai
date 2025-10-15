import { buttonVariants } from "@/components/ui/button";
import { assets } from "@assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section className="flex min-h-screen items-start justify-center bg-[url(@assets/gradientBackground.png)] bg-cover px-10 md:items-center">
      <article className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-center text-2xl leading-10 font-semibold md:text-7xl md:leading-24">
          Create amazing content with
          <span className="text-primary block"> AI tools </span>
        </h1>
        <p className="w-3/4 text-center text-zinc-400">
          Transform your content creation with our suite of premium AI tools. Write articles,
          generate images, and enhance your workflow.
        </p>
        <div className="my-5 flex flex-col items-center justify-center gap-8 md:flex-row">
          <Link href="/ai/dashboard" className={buttonVariants({ className: "w-44" })}>
            Start Creating Now
          </Link>
          <Link
            href="/ai"
            className={buttonVariants({
              variant: "ghost",
              className: "w-44 border border-zinc-300 bg-zinc-50",
            })}
          >
            Watch Demo
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 text-center text-zinc-400 md:flex-row">
          <Image src={assets.user_group} alt={"users"} className="h-10 w-fit object-contain" />
          Trusted by 10k+ people
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
