"use client";

import React from "react";
import Button from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import Image from "next/image";

const DummyProductPage = () => {
  const images = ["/lipstick.png", "/lipstick.png", "/lipstick.png"];

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Product of the Month
          </h1>
          <p className="mt-1 text-gray-500">
            Carefully curated picks from our best-loved essentials.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thumbnail List */}
          <div className="flex md:flex-col gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-20 h-20 relative border rounded overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`thumb-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full h-96 md:col-span-1 bg-gray-100 rounded">
            <Image
              src="/lipstick.png"
              alt="Product Image"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Lorem ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Placerat commodo orci.
            </p>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <span className="text-red-600 text-xl font-bold">$23</span>
              <span className="line-through text-gray-400">$30</span>
              <span className="text-red-500 text-sm font-medium">SAVE 20%</span>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <Star className="w-4 h-4 text-gray-300" />
              <span>No reviews</span>
            </div>

            {/* Size Selector */}
            <div className="space-y-1">
              <label
                htmlFor="size"
                className="text-sm font-medium text-gray-700"
              >
                Size
              </label>
              <select id="size" className="w-full border rounded px-3 py-2">
                <option value="xxl">XXL</option>
                <option value="xl">XL</option>
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-1">
              <label
                htmlFor="qty"
                className="text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="number"
                id="qty"
                min="1"
                defaultValue="1"
                className="w-20 border rounded px-3 py-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button className="bg-blue-600 text-white w-full">
                Add To Cart
              </Button>
              <Button className="w-full">Buy Now</Button>
            </div>

            {/* Pickup Info */}
            <div className="flex items-start gap-2 text-sm text-gray-700 mt-4">
              <Truck className="w-5 h-5 text-gray-500 mt-1" />
              <p>
                Pickup available at <strong>Los-ferro</strong>
                <br />
                Pick up on Sunday, 12PM - 5PM. Usually ready in 4 hours.
              </p>
            </div>

            <p className="text-sm text-blue-600 mt-2 underline cursor-pointer">
              View store information
            </p>

            {/* Social Icons (placeholder) */}
            <div className="flex gap-3 mt-4 text-gray-500">
              <span className="cursor-pointer">🔗</span>
              <span className="cursor-pointer">📷</span>
              <span className="cursor-pointer">💬</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyProductPage;
