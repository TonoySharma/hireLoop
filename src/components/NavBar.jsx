"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import NavLink from "./NavLink";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur-lg">
      <div className="container mx-auto flex h-[60px] items-center justify-between px-6">

        {/* Left Side Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[17px] text-gray-900 no-underline"
        >
          <div
            className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-sky-500"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <span>JobBoard</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-5 font-semibold md:flex">
            <li>
              <NavLink
                href="#"
                className="block rounded-md px-3 py-1.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 no-underline"
              >
                Browse Jobs
              </NavLink>
            </li>

            <li>
              <NavLink
                href="#"
                className="block rounded-md px-3 py-1.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 no-underline"
              >
                Company
              </NavLink>
            </li>

            <li>
              <NavLink
                href="#"
                className="block rounded-md px-3 py-1.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 no-underline"
              >
                Pricing
              </NavLink>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login" className="w-full">
              <Button
                className="cursor-pointer rounded bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-sky-600"
              >
                log In
              </Button>
            </Link>

            <Link href="/register" className="w-full">
              <Button
                className="cursor-pointer rounded bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-sky-600"
              >
                Get Started →
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="cursor-pointer rounded-md bg-transparent p-1.5 text-gray-500 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-1 border-t border-gray-200 px-5 pb-4 pt-3 md:hidden">
          <NavLink
            href="#"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 no-underline"
          >
            Browse Jobs
          </NavLink>

          <NavLink
            href="#"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 no-underline"
          >
            Company
          </NavLink>

          <NavLink
            href="#"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 no-underline"
          >
            Pricing
          </NavLink>

          <div className="my-2 h-px bg-gray-200" />

          <NavLink href="/login" className="w-full">
            <Button
              className="cursor-pointer rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-sky-600"
            >
              Log In
            </Button>
          </NavLink>

          <NavLink href="/register" className="w-full">
            <Button
              className="cursor-pointer rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-sky-600"
            >
              Get Started →
            </Button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;