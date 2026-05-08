"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = gsap.utils.toArray(".project-card");

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cards[0],
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      aria-labelledby="projects-heading"
      className="py-24 border-t border-neutral-900"
    >
      <div className="grid hover-trigger md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2
            id="projects-heading"
            className="text-sm font-medium text-neutral-500 uppercase tracking-widest sticky top-32 max-md:static"
          >
            Projects
          </h2>
        </div>

        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="VirtualR"
              description="A modern SaaS landing page built with Next.js, focused on clean UI, performance, and conversion."
              tags={["React.js", "Tailwind"]}
              image="/projects/virtualr.jpg"
              href="https://virtual-r-bice-iota.vercel.app"
            />

            <ProjectCard
              title="PHANTOM"
              description="A high-performance web platform built for a hardware engineering startup. Focused on delivering a seamless user experience for showcasing industrial-grade embedded solutions and aerospace technology."
              tags={["Next.js", "Framer", "Typescript"]}
              image="/projects/phantom.jpeg"
              href="https://www.phantom.com.np/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, image, href }) {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animateIn = () => {
    if (prefersReducedMotion) return;

    gsap.to(imageRef.current, {
      scale: 1.05,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.35,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const animateOut = () => {
    if (prefersReducedMotion) return;

    gsap.to(imageRef.current, {
      scale: 1,
      opacity: 0.85,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <article
      className="project-card group relative bg-neutral-925 border border-neutral-800 rounded-lg overflow-hidden transition-colors duration-300 hover:border-neutral-600 focus-within:border-neutral-600"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onFocus={animateIn}
      onBlur={animateOut}
    >
      {/* Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          alt={`${title} project preview`}
          className="absolute inset-0 w-full h-full object-cover opacity-85 scale-100"
        />

        <div
          ref={overlayRef}
          aria-hidden="true"
          className="absolute inset-0 bg-black opacity-20"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-white tracking-tight">
            {title}
          </h3>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} project`}
            className="text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          >
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed mb-4">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] uppercase tracking-wider text-neutral-500 border border-neutral-800 px-2 py-1 rounded"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
