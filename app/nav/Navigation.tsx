"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { cn } from "../../common/lib/utils";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header>
      {/* Mobile Header */}
      <div className="flex md:hidden fixed top-0 w-full h-[68px] justify-between items-center pl-6 pr-6 z-50 text-gray-600">
        <Link href="/">
          <img src="/img/logo.png" alt="logo" className="w-[48px]" />
        </Link>

        <button onClick={() => setMobileMenuOpen((v) => !v)}>
          {mobileMenuOpen ? (
            <IoMdClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex h-screen w-[78px] lg:w-[86px] xl:w-[92px] fixed top-0 left-0 z-50 pl-4 xl:pl-6">
        <div className="flex flex-col h-full pb-6">
          <div className="pt-2 pl-4 xl:pl-1">
            <Link href="/">
              <img
                src="/img/logo.png"
                alt="logo"
                className="w-[50px] xl:w-[80px]"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center relative">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg xl:text-xl rotate-270 font-medium relative my-5 xl:my-6 py-3 transition-colors",
                    pathname === link.href
                      ? "text-sky-600 font-extrabold after:scale-x-100"
                      : "text-gray-300 after:scale-x-0",
                    "after:absolute after:left-0 after:bottom-6 after:w-full after:h-[4px] after:bg-sky-600",
                    "after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pl-7 flex flex-col gap-4">
              <Link href="https://www.linkedin.com/in/akbar-dermawan-30bb6a210/">
                <FaLinkedin className="w-7 h-7 hover:text-sky-600 hover:scale-110 transition-transform text-gray-300" />
              </Link>
              <Link href="">
                <FaTwitter className="w-7 h-7 hover:text-sky-600 hover:scale-110 transition-transform text-gray-300" />
              </Link>
              <Link href="https://github.com/akbardermawan">
                <FaGithub className="w-7 h-7 hover:text-sky-600 hover:scale-110 transition-transform text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={cn(
          "md:hidden fixed inset-0 z-40 backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 transition-all duration-700",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col items-center space-y-4 py-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-lg font-medium w-full text-center",
                  pathname === link.href
                    ? "bg-sky-100 dark:bg-sky-900/40"
                    : "hover:bg-gray-200/60 dark:hover:bg-gray-800/80",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
