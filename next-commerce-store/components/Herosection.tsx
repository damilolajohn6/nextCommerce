import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import Navbar from "./navbar";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-100 font-inter">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0">
        {/* <Image
          src="/hero.png" 
          alt="Left decorative"
          layout="fill"
          objectFit="contain"
          className="opacity-60"
        /> */}
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full z-0">
        <Image
          src="/hero.png"
          alt="Right decorative"
          layout="fill"
          objectFit="contain"
          className="opacity-60"
        />
      </div>

      {/* Navbar */}
      {/* <div className="relative z-20 w-full">
        <Navbar />
      </div> */}

      {/* Content */}
      <div className="relative z-20 mt-10 md:mt-20 px-6 max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          THOUGHTFUL GOODS FOR A <br /> BEAUTIFUL LIFE
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-prose mx-auto mb-8 leading-relaxed">
          Each piece is thoughtfully designed with gentle materials and enduring
          craftsmanship. Made to last through seasons—and made to be loved every
          day.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/shop" passHref>
            <button className="bg-[#514DF8] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out text-lg w-full sm:w-auto">
              Shop Now
            </button>
          </Link>
          <Link href="/discount" passHref>
            <button className="flex items-center justify-center text-[#514DF8] hover:text-blue-900 font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out text-lg w-full sm:w-auto">
              Get 30% discount <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
