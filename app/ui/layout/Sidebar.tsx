"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navigationPages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "fixed top-0 h-full bg-background transition-all w-80 p-6",
        { " left-0": isOpen, "left-[-1000px]": !isOpen }
      )}
    >
      <div className="flex flex-row items-center gap-2 pb-4">
        <Image
          src="/header-logo.webp"
          alt="header logo"
          width={20}
          height={20}
        />
        <p className="font-semibold text-lg text-white">Eduardo</p>
        <div
          onClick={() => setIsOpen(false)}
          className="w-full flex justify-end"
        >
          <XMarkIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col">
        {navigationPages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className="py-3"
            onClick={() => setIsOpen(false)}
          >
            <p
              className={clsx("text-2xl cursor-pointer hover:text-brand", {
                "font-semibold text-brand": pathname === page.href,
              })}
            >
              <span className="text-brand">#</span> {page.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
