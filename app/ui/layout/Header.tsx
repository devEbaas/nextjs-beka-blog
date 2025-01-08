"use client";
import Image from "next/image";
import { Bars2Icon } from "@heroicons/react/20/solid";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import clsx from "clsx";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-background h-20 w-full flex items-center justify-between px-6 z-10">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/header-logo.webp"
            alt="header logo"
            width={20}
            height={20}
          />
          <p className="font-semibold text-lg">Eduardo</p>
        </div>
        <div onClick={() => setIsOpen(true)} className={clsx("cursor-pointer", { "hidden": isOpen })}>
          <Bars2Icon className="w-6 h-6" width={24} height={24} />
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}