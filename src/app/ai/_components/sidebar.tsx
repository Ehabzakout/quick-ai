"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Protect, useUser, useClerk } from "@clerk/nextjs";
import { Home, LogOutIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SquarePen, Hash, Image as imgIcon, Eraser, Scissors, FileText } from "lucide-react";
import React from "react";

function AiSidebar() {
  const { isSignedIn, user } = useUser();
  const { openUserProfile, signOut } = useClerk();
  const pathname = usePathname();

  const pages = [
    { title: "Dashboard", href: "dashboard", icon: Home },
    { title: "Write Article", href: "write-article", icon: SquarePen },
    { title: "Blog Titles", href: "blog-titles", icon: Hash },
    { title: "Generate Images", href: "generate-images", icon: imgIcon },
    { title: "Remove Background", href: "remove-background", icon: Eraser },
    { title: "Remove Object", href: "remove-object", icon: Scissors },
    { title: "Review Resume", href: "review-resume", icon: FileText },
  ];

  return (
    <Sidebar collapsible="none" className="min-h-screen w-1/3 bg-white px-7 pt-3">
      <SidebarContent>
        <SidebarHeader className="flex flex-col items-center">
          <div className="from-blue to-green size-16 overflow-hidden rounded-full bg-gradient-to-b">
            {user?.hasImage ? (
              <Image
                src={user.imageUrl}
                width={64}
                height={64}
                alt="Photo"
                className="size-full object-contain"
              />
            ) : (
              <span className="flex size-full items-center justify-center text-2xl text-white capitalize">
                {user?.firstName?.slice(0, 1)}
              </span>
            )}
          </div>
          {isSignedIn && <p className="mt-2 text-lg font-medium">{user?.fullName}</p>}
        </SidebarHeader>
        <SidebarMenu>
          {pages.map((page) => (
            <SidebarMenuButton asChild isActive={pathname === `/ai/${page.href}`} key={page.href}>
              <Link href={`/ai/${page.href}`} className="my-1 py-5 capitalize">
                <page.icon />
                {page.title}
              </Link>
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
        <SidebarFooter className="mt-20 mb-10 flex flex-row items-center justify-between border-t border-t-zinc-300 pt-5 text-sm">
          <div
            onClick={() => {
              openUserProfile();
            }}
            className="flex flex-1 cursor-pointer items-center gap-3 rounded-lg px-3 py-1 hover:bg-zinc-100"
          >
            <div className="from-blue to-purple flex size-10 items-center justify-center rounded-full bg-gradient-to-br">
              <User color="white" size={25} />
            </div>
            <div>
              <h5>{user?.fullName}</h5>
              <p className="text-zinc-400">
                <Protect plan={"premium"} fallback="free">
                  Premium
                </Protect>
                Plan
              </p>
            </div>
          </div>
          <LogOutIcon
            className="cursor-pointer rounded-sm p-1 hover:bg-zinc-100"
            onClick={() => signOut()}
          />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}

export default AiSidebar;
