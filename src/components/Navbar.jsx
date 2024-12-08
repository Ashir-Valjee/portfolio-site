"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

export default function NavBar() {
  const { changeTheme } = useContext(ThemeContext);

  const { theme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  function handleTheme() {
    if (theme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  }
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">
                  <i className="fa-solid fa-house"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <i className="fa-regular fa-user"></i>
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills">
                  <i className="fa-solid fa-keyboard"></i>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <i className="fa-regular fa-folder-open"></i>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact-me">
                  <i className="fa-solid fa-address-card"></i> Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">
                <i className="fa-solid fa-house"></i> Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                <i className="fa-regular fa-user"></i> About
              </Link>
            </li>

            <li>
              <Link href="/skills">
                <i className="fa-solid fa-keyboard"></i> Skills
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <i className="fa-regular fa-folder-open"></i> Projects
              </Link>
            </li>
            <li>
              <Link href="/contact-me">
                <i className="fa-solid fa-address-card"></i> Contact me
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex flex-row ml-10 gap-10 ">
          <div>
            <SocialLinks />
          </div>

          <div className=" ">
            <ThemeToggle handleTheme={handleTheme} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </>
  );
}
