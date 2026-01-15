"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    elements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section id="about" className="py-24 border-t border-neutral-900">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Sidebar Title */}
        <div className="md:col-span-3">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest sticky top-32">
            About
          </h2>
        </div>

        {/* Main Content */}
        <div className="md:col-span-9 space-y-8">
          {/* Typewriter Text Block */}
          <div className="reveal-on-scroll text-2xl md:text-3xl font-normal text-neutral-200 leading-snug tracking-tight">
            I'm a{" "}
            <span className="font-bold inline-block">
              <Typewriter
                options={{
                  strings: [
                    "FrontEnd Developer",
                    "Web Enthusiast",
                    "Tech Lover",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 40,
                }}
              />
            </span>{" "}
            based in Kathmandu, Nepal. I specialize in building modern web
            applications with a focus on user experience and performance.
          </div>

          {/* Description Paragraph */}
          <p className="reveal-on-scroll text-base text-neutral-400 leading-relaxed max-w-2xl">
            With over a year of experience, I've worked with startups and
            established companies to deliver robust digital solutions. My stack
            usually involves React, Next.js, TypeScript, and Node.js, but I'm
            always exploring new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
