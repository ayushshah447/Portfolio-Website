"use client";
import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed backdrop-blur-lg top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
      <a
        href="/"
        className="hover-trigger text-md font-medium tracking-tighter hover:opacity-70 transition-colors"
      >
        Web Developer
      </a>

      <div className="hidden md:flex gap-6">
        <a
          href="#work"
          className="hover-trigger text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          Work
        </a>
        <a
          href="#about"
          className="hover-trigger text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover-trigger text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          Contact
        </a>
      </div>

      <div className="md:hidden hover-trigger">
        <Menu size={24} strokeWidth={1.5} />
      </div>
    </nav>
  );
}
