import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

function Footer() {
  return (
    <footer className="mb-5">
      <div className="mb-3 grid grid-cols-1 gap-5 px-10 md:grid-cols-3">
        <article className="text-sm leading-4 text-zinc-400">
          <Logo />
          <span className="mt-5 block">Experience the power of AI with QuickAi.</span>
          <p>
            Transform your content creation with our suite of premium AItools. Write articles,
            generate images, and enhance your workflow.
          </p>
        </article>
        <div className="flex flex-col justify-center gap-1 text-zinc-400">
          <h5 className="mx-auto my-2 font-medium text-black">Company</h5>
          <button>Home</button>
          <button>About Us</button>
          <button>Contact Us</button>
          <button>Privacy Policy</button>
        </div>
        <div className="text-center md:text-start">
          <h5 className="mx-auto my-2 font-medium">Subscribe to our newsletter</h5>
          <p className="text-sm text-zinc-400">
            The Latest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="mt-5 flex gap-3">
            <Input placeholder="Enter Your Email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator />
      <p className="mt-5 text-center text-sm text-zinc-400">
        Copyright 2025 &copy; QuickAi. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
