"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ArrowDown, Github, Twitter, Linkedin } from "lucide-react";
import CircularText from "@/app/components/CircularText";

export default function Hero() {
  useEffect(() => {
    const heroLines = document.querySelectorAll(".hero-line");

    heroLines.forEach((line, index) => {
      gsap.from(line, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2 + index * 0.1,
        ease: "power4.out",
      });
    });

    gsap.to(".hero-fade", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="h-screen flex flex-col justify-start relative z-10">
      <div className="overflow-hidden mb-2">
        <h1 className="hero-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-100 leading-[1.1]">
          AYUSH
        </h1>
      </div>

      <div className="overflow-hidden mb-6">
        <h1 className="hero-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-500 leading-[1.1]">
          SHAH.
        </h1>
      </div>

      <div className="overflow-hidden max-w-xl mt-4">
        <p className="hero-line text-base md:text-lg text-neutral-400 font-light leading-relaxed tracking-tight">
          I build accessible, pixel-perfect, performant web experiences. Focused
          on motion, interaction, and clean code architecture.
        </p>
      </div>

      <div className="hero-fade mt-12 flex items-center gap-4 opacity-0">
        <a
          href="#work"
          className="hover-trigger group flex items-center gap-2 text-sm font-medium text-white border border-neutral-800 rounded-full px-5 py-2 hover:bg-neutral-900 transition-colors"
        >
          <span>View Work</span>
          <ArrowDown
            size={16}
            strokeWidth={1.5}
            className="group-hover:translate-y-0.5 transition-transform"
          />
        </a>

        <div className="flex gap-4 px-4">
          <a
            href="https://github.com/ayushshah447"
            className="hover-trigger text-neutral-500 hover:text-white transition-colors"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a className="hover-trigger text-neutral-500 hover:text-white transition-colors">
            <Twitter size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushshah447/"
            className="hover-trigger text-neutral-500 hover:text-white transition-colors"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <div className="absolute h-20 right-4 top-[20%] -translate-y-1/2 hidden md:block leading-[1.1]">
        <CircularText
          text="SHADOW*CODE*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class hero-line"
        />
      </div>
    </section>
  );
}
