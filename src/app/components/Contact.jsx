"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Mail, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  useEffect(() => {
    const lines = document.querySelectorAll(".cta-line");
    const actions = document.querySelectorAll(".cta-action");

    gsap.from(lines, {
      scrollTrigger: {
        trigger: "#cta",
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(actions, {
      scrollTrigger: {
        trigger: "#cta",
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      delay: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-black px-10 py-20">
        {/* Headline */}
        <h2 className="max-w-3xl text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
          <span className="cta-line block text-white">Ready to build</span>
          <span className="cta-line block text-neutral-500">something</span>
          <span className="cta-line block text-neutral-500">
            extraordinary?
          </span>
        </h2>

        {/* CTA Row */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10">
          {/* Left */}
          <div className="cta-action">
            <p className="mb-3 text-sm text-neutral-500">Get Started</p>
            <a
              href="mailto:ayushshah447@gmail.com"
              className="group hover-trigger inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.06] active:scale-95"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Right */}
          <div className="cta-action text-left sm:text-right">
            <p className="mb-3 text-sm text-neutral-500">Schedule a Call</p>
            <button className="group hover-trigger inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.06] active:scale-95">
              <Calendar size={18} />
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
