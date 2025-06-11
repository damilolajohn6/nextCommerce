import React from "react";
import Image from "next/image";

type BenefitItemProps = {
  title: string;
  description: string;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start space-x-2">
      <span className="text-xl text-black">•</span>
      <div>
        <h4 className="text-base sm:text-lg font-semibold text-gray-800">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi auctor velit sed elit nunc.",
    },
    {
      title: "Hassle-Free Returns",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi auctor velit sed elit nunc.",
    },
    {
      title: "Sustainable Materials product",
      description:
        "Dictum viverra mauris sapien egestas. Est vel sit egestas sit semper.",
    },
    {
      title: "5-Star Reviews",
      description:
        "Dictum viverra mauris sapien egestas. Est vel sit egestas sit semper.",
    },
  ];

  return (
    <section className="relative bg-orange-100 min-h-screen w-full flex items-center justify-center font-inter overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hold.jpg" // Use the actual path you have in your public folder
          alt="Woman holding a paper bag"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 bg-white bg-opacity-95 rounded-xl shadow-lg w-full max-w-2xl p-6 sm:p-10 md:p-12 m-4 sm:ml-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left text-gray-900 mb-4">
          Why You Should Buy <br className="hidden sm:inline" /> From Us
        </h2>
        <p className="text-center sm:text-left text-gray-700 mb-6 text-sm sm:text-base">
          Well, let&rsquo;s highlight a few reasons why LOA-Terra should be your
          number one ecommerce plug.
        </p>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
