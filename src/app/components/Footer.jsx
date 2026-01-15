"use client";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden text-white  border-neutral-800 border-t pt-24">
      {/* Giant Brand Text */}
      <div
        className="text-center w-full mb-20 px-4"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 55%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 55%, transparent)",
        }}
      >
        <h1 className="text-[22vw] leading-[0.7] select-none font-bold text-[#141414] tracking-tighter mix-blend-screen scale-y-110 reveal-on-scroll">
          AYUSH
        </h1>
      </div>

      {/* Links + Illustration Grid */}
      <div className="border-t border-neutral-900 grid  reveal-on-scroll reveal-delay-100">
        {/* Right: Bottles SVG */}
        <div className="lg:h-auto lg:border-t-0 flex overflow-hidden aether-bottles w-full h-48 border-neutral-900 border-t relative items-center justify-center">
          <svg
            viewBox="0 0 400 120"
            className="opacity-20"
            preserveAspectRatio="xMidYMid meet"
            strokeWidth="2"
            style={{
              width: "756px",
              height: "160px",
              color: "rgb(255, 255, 255)",
            }}
          >
            {/* <!-- Tube 1 (Outline) --> */}
            <path
              d="M40 100 L50 30 L90 30 L100 100"
              stroke="white"
              strokeWidth="1"
              fill="none"
            ></path>
            <rect
              x="50"
              y="20"
              width="40"
              height="10"
              stroke="white"
              strokeWidth="1"
              fill="none"
            ></rect>

            {/* <!-- Tube 2 (Outline) --> */}
            <path
              d="M120 100 L130 10 L170 10 L180 100"
              stroke="white"
              strokeWidth="1"
              fill="none"
            ></path>
            <rect
              x="130"
              y="5"
              width="40"
              height="5"
              stroke="white"
              strokeWidth="1"
              fill="none"
            ></rect>

            {/* <!-- Dropper Bottle (wave liquid) --> */}
            <g transform="translate(200, 10)" className="dropper-bottle">
              {/* <!-- ClipPath in the SAME coordinates as the bottle --> */}
              <defs>
                <clipPath id="dropper-clip">
                  {/* <!-- inside shape of the bottle --> */}
                  <path d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 80 Q45 90 30 90 Q15 90 15 80 Z" />
                </clipPath>
              </defs>

              {/* <!-- Cap --> */}
              <path
                d="M25 0 L25 10 L20 10 L20 20 L40 20 L40 10 L35 10 L35 0 Z"
                stroke="white"
                strokeWidth="1"
                fill="none"
              ></path>

              {/* <!-- Body Outline --> */}
              <path
                d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 80 Q45 90 30 90 Q15 90 15 80 Z"
                stroke="white"
                strokeWidth="1"
                fill="none"
              ></path>

              {/* <!-- Liquid (clipped perfectly inside bottle) --> */}
              <g clipPath="url(#dropper-clip)">
                {/* <!-- Base fill --> */}
                <rect
                  className="liquid-fill"
                  x="15"
                  y="60"
                  width="30"
                  height="30"
                  fill="#7c4a30"
                  opacity="0.6"
                ></rect>

                {/* <!-- Wave on top --> */}
                <path
                  className="liquid-wave"
                  d="M15 60 Q22 55 30 57 Q38 59 45 56 L45 90 L15 90 Z"
                  fill="#7c4a30"
                  opacity="0.9"
                ></path>
              </g>
            </g>

            {/* <!-- Tube 3 (Outline) --> */}
            <path
              d="M270 100 L280 20 L320 20 L330 100"
              stroke="white"
              strokeWidth="1"
              fill="none"
            ></path>
            <rect
              x="280"
              y="10"
              width="40"
              height="10"
              stroke="white"
              strokeWidth="1"
              fill="none"
            ></rect>

            {/* <!-- Dropper 2 (Outline) --> */}
            <g transform="translate(350, 20)">
              <rect
                x="25"
                y="0"
                width="10"
                height="20"
                stroke="white"
                strokeWidth="1"
                fill="none"
              ></rect>
              <path
                d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 70 Q45 80 30 80 Q15 80 15 70 Z"
                stroke="white"
                strokeWidth="1"
                fill="none"
              ></path>
            </g>
          </svg>
        </div>
        {/* Copyright Row */}
        <div className="border-t border-neutral-900 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-center items-center  text-xl text-neutral-600 font-medium tracking-wide reveal-on-scroll reveal-delay-100">
          <div className="justify-center items-center">
            &copy; 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
