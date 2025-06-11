import React from "react";
import { ArrowRight, Instagram, X } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-blue-800">
        {/* Sign Up Section */}
        <div className="flex flex-col items-start lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 rounded-md">
            Sign Up and Recieve 15% Off
          </h2>
          <div className="relative w-full max-w-sm rounded-md">
            <input
              type="email"
              placeholder="Email : loaterra@gmail.com"
              className="w-full pl-3 pr-10 py-3 bg-blue-800 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email for 15% off signup"
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 focus:outline-none rounded-md"
              aria-label="Sign up for newsletter"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* About & Social Sections */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 rounded-md">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline rounded-md">
                  All Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline rounded-md">
                  News/trend
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 rounded-md">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline rounded-md">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline rounded-md">
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 rounded-md">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline rounded-md">
                Exchange and return policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline rounded-md">
                Shipment and Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline rounded-md">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline rounded-md">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8">
        {/* Follow Us Section */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <p className="text-lg font-semibold mb-2 rounded-md">
            Follow us for the latest trends and updates !
          </p>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" aria-label="Instagram">
              <Instagram className="h-7 w-7 hover:text-blue-300 rounded-md" />
            </a>
            <a href="#" aria-label="X (formerly Twitter)">
              <X className="h-7 w-7 hover:text-blue-300 rounded-md" />
            </a>
          </div>
        </div>
      </div>
      {/* Loa-Terra Logo/Text */}
      <div className="text-5xl  font-sans font-bold flex items-center justify-center text-white rounded-md">Loa-Terra</div>
    </footer>
  );
};

export default Footer;
