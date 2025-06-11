import React from "react";

// Define a type for a single service item
type ServiceItemProps = {
  title: string;
  description: string;
};

// Component for a single service item
const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-md">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 rounded-md">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed rounded-md">
        {description}
      </p>
    </div>
  );
};

const InfoSection: React.FC = () => {
  // Data for the service items
  const services = [
    {
      title: "CUSTOMER SERVICE",
      description:
        "You can reach us at 09078890456. We are available from 10am to 8pm, Mondays - Fridays to answer your question.",
    },
    {
      title: "SECURE PAYMENT",
      description: "Your payment information is processed securely.",
    },
    {
      title: "CONTACT US",
      description:
        "You can reach us at 09078890456. We are available from 10am to 8pm, Mondays - Fridays to answer your question.",
    },
  ];

  return (
    <section className=" py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceItem
            key={index} 
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
