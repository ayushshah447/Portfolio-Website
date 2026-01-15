"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.className =
      "fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference opacity-0";
    document.body.appendChild(cursor);

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(cursor, "x", { duration: 0.1 });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.1 });

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
      xTo(e.clientX);
      yTo(e.clientY);
    });

    const hoverEls = document.querySelectorAll(".hover-trigger");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2.5, duration: 0.2 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      });
    });
  }, []);

  return null;
}
