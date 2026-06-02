import React from 'react';
import { FaBagShopping } from 'react-icons/fa6';
import { FcSearch } from 'react-icons/fc';


const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-black py-28 text-white">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

            {/* Floating Blur */}
            <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

            <div className="container relative z-10 mx-auto px-6 text-center">

                {/* Badge */}
                <div
                    className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full 
      border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
                >
                    <div
                        className="flex h-7 w-7 items-center justify-center rounded-full">
                        <FaBagShopping />
                    </div>

                    <p className="text-sm font-medium tracking-wide text-zinc-300">
                        <span className="font-bold text-white">50,000+</span> NEW JOBS THIS
                        MONTH
                    </p>
                </div>

                {/* Heading */}
                <h1
                    className="mx-auto max-w-4xl text-5xl font-bold leading-tight 
      tracking-tight md:text-7xl"
                >
                    Find Your Dream Job Today
                </h1>

                {/* Subtitle */}
                <p
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    HireLoop connects top talent with world-class companies. Browse
                    thousands of curated opportunities and land your next role — faster.
                </p>

                {/* Search Box */}
                <div
                    className="mx-auto mt-12 flex max-w-4xl flex-col overflow-hidden 
      rounded-2xl border border-white/10 bg-white/5 shadow-2xl 
      backdrop-blur-xl md:flex-row">
                    {/* Job Input */}
                    <div className="flex flex-1 items-center gap-3 border-b border-white/10 px-5 py-4 md:border-b-0 md:border-r">
                        <svg
                            className="h-5 w-5 text-zinc-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="w-full bg-transparent text-sm text-white outline-none 
          placeholder:text-zinc-500"
                        />
                    </div>

                    {/* Location Input */}
                    <div className="flex flex-1 items-center gap-3 px-5 py-4">
                        <svg
                            className="h-5 w-5 text-zinc-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="w-full bg-transparent text-sm text-white outline-none 
          placeholder:text-zinc-500"
                        />

                        {/* Search Button */}
                        <button
                            className="flex h-12 w-18 items-center justify-center rounded-xl 
          bg-cyan-500 transition-all hover:scale-105 hover:bg-cyan-600 cursor-pointer">
                         <FcSearch className='text-2xl'/>
                        </button>
                    </div>
                </div>

                {/* Trending Tags */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <span className="text-sm text-zinc-500">Trending Position</span>

                    {[
                        "Product Designer",
                        "AI Engineering",
                        "DevOps Engineer",
                    ].map((tag) => (
                        <button
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 
          px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl 
          transition-all hover:border-violet-500/40 hover:bg-violet-500/10 
          hover:text-white">
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;