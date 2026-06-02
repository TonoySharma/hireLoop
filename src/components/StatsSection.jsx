"use client";

import React from "react";

import { Card } from "@heroui/react";

export default function StatsSection() {
  const statsData = [
    {
      id: 1,
      value: "50K",
      label: "Active Jobs",
      icon: "M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
    },
    {
      id: 2,
      value: "12K",
      label: "Companies",
      icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
    },
    {
      id: 3,
      value: "2M",
      label: "Job Seekers",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    {
      id: 4,
      value: "97%",
      label: "Satisfication Rate",
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    },
  ];

  return (
    <section
      className="relative min-h-[600px] w-full flex flex-col items-center justify-center px-4
       py-16 bg-black overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/globe.png')", 
      }}>
      {/* Heading */}
      <div className="text-center max-w-3xl mt-16 z-10 px-4">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-normal text-slate-200 tracking-tight leading-relaxed">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
          <br />
          find their dream positions.
        </h2>
      </div>

      {/* Grid Container */}
      <div className="relative w-full max-w-7xl z-10">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 mt-20">
          {statsData.map((stat) => (
            <Card
              key={stat.id}
              className="bg-[#121212]/80 backdrop-blur-md border border-neutral-800/40 rounded-2xl
               p-6 shadow-xl hover:border-neutral-700/60 transition-all duration-300 min-h-[190px]"
              shadow="none"
            >
          
              <div className="flex flex-col justify-between h-full gap-8">
                {/* SVG Icon */}
                <div className="text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={stat.icon}
                    />
                  </svg>
                </div>

                {/* Stats and Label */}
                <div className="flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-neutral-400 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}