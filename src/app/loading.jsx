import React from "react";

const loading = ({ size = "md", text }) => {
  // সাইজ নির্ধারণের জন্য ম্যাপ
  const sizeClasses = {
    sm: "h-8 w-8 border-2",
    md: "h-14 w-14 border-[3px]",
    lg: "h-20 w-20 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        {/* বাইরের গ্লোয়িং রিং (Outer Glowing Ring) */}
        <div
          className={`animate-ping absolute inline-flex rounded-full opacity-20 bg-sky-400 ${
            size === "sm" ? "h-6 w-6" : size === "md" ? "h-12 w-12" : "h-16 w-16"
          }`}
        />

        {/* প্রধান স্পিনার (Main Spinner Outer) */}
        <div
          className={`${sizeClasses[size]} rounded-full border-sky-500/20 border-t-sky-500 border-r-sky-500 animate-spin`}
          style={{ animationDuration: "0.8s" }}
        />

        {/* ভেতরের উল্টো স্পিনার (Inner Counter-Rotating Spinner) */}
        <div
          className={`absolute rounded-full border-dashed border-sky-400/10 border-t-sky-400 animate-spin ${
            size === "sm"
              ? "h-4 w-4 border"
              : size === "md"
              ? "h-8 w-8 border-[2px]"
              : "h-12 w-12 border-[2px]"
          }`}
          style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
        />
      </div>

      {/* স্পিনারের নিচের প্রিমিয়াম টেক্সট */}
      {text && (
        <p className="text-sm font-medium tracking-wide text-gray-500 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default loading;