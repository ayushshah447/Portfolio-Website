"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useEffect(() => {
    const items = document.querySelectorAll(".job-item");
    gsap.from(items, {
      scrollTrigger: {
        trigger: "#work",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="work" className="py-24 border-t border-neutral-900">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest sticky top-32">
            Experience
          </h2>
        </div>

        <div className="md:col-span-9 flex flex-col gap-16">
          {/* Job 1 */}
          <JobItem
            role="Frontend Developer Intern"
            place="Midas Health Services Pvt. Ltd."
            year="2025 — Present"
            description="Enhancing cross-browser compatibilty and optimizing application performance, Integration with backend APIs..."
            tags={["JavaScript", "React.js"]}
          />
        </div>
      </div>
    </section>
  );
}

function JobItem({ role, place, year, description, tags }) {
  return (
    <div className="hover-trigger group job-item relative">
      <div className="absolute -left-4 top-0 w-0.5 h-full bg-neutral-800 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
        <h3 className="text-xl font-medium text-neutral-100 tracking-tight">
          {role}
        </h3>
        <span className="text-sm text-neutral-500 font-mono mt-1 md:mt-0">
          {year}
        </span>
      </div>

      <h4 className="text-base text-neutral-400 mb-4">{place}</h4>
      <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
        {description}
      </p>

      <div className="flex gap-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
