"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, User, Mail, ShoppingCart } from "lucide-react";

const Topbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <header className="text-gray-400 py-4 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="w-full sm:max-w-xs md:max-w-md lg:max-w-sm order-2 sm:order-1"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-3 pr-10 py-2 bg-transparent border-b-2 border-gray-100 text-gray-400 placeholder-gray-400 focus:outline-none focus:border-blue-500 rounded-md"
              aria-label="Search input"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-300 focus:outline-none p-1"
              aria-label="Submit search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* Logo */}
        <div className="order-1 sm:order-2 text-center w-full sm:w-auto">
          <Link href="/" className="inline-block">
            <span className="text-3xl sm:text-4xl font-black text-blue-500">
              Loa-Terra
            </span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-end gap-4 order-3">
          <Link href="/profile" aria-label="User profile">
            <User className="h-6 w-6 hover:text-blue-300" />
          </Link>
          <Link href="/messages" aria-label="Messages">
            <Mail className="h-6 w-6 hover:text-blue-300" />
          </Link>
          <Link href="/cart" aria-label="Shopping cart">
            <ShoppingCart className="h-6 w-6 hover:text-blue-300" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
