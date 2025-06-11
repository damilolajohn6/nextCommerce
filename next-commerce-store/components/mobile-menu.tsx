"use client";

import getCategories from "@/actions/get-categories";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Shop All" },
];

type MobileMenuProps = {
  categories: Awaited<ReturnType<typeof getCategories>>;
};

const MobileMenu = ({ categories }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-600 hover:text-black rounded-md"
        aria-label="Open mobile menu"
      >

        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <p className="text-lg font-semibold rounded-md">Loa-Terra</p>{" "}
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="rounded-md"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="block text-gray-800 hover:text-black text-base font-medium rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t pt-4 mt-4 space-y-2">
            <p className="text-sm font-semibold text-gray-600 rounded-md">
              Categories
            </p>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                onClick={toggleMenu} 
                className="block text-gray-700 hover:text-black text-sm rounded-md"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
