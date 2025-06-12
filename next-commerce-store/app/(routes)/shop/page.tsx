// app/(routes)/shop/page.tsx

import React from "react";

import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";

import BillboardCard from "@/components/ui/billboard-card";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import getCategories from "@/actions/get-categories";

// Define props for App Router (searchParams only here, since no [param] in route)
interface ShopPageProps {
  searchParams?: {
    colorId?: string;
    sizeId?: string;
  };
}

const ShopPage = async ({ searchParams }: ShopPageProps) => {
  // Destructure and handle searchParams safely
  const colorId = searchParams?.colorId;
  const sizeId = searchParams?.sizeId;

  // Load filters
  const [sizes, colors] = await Promise.all([getSizes(), getColors()]);

  // Load products and billboards
  const [products, billboards] = await Promise.all([
    getProducts({
      isFeatured: true,
      ...(colorId && { colorId }),
      ...(sizeId && { sizeId }),
    }),
    getBillboards(),
  ]);

  return (
    <div className="w-full overflow-hidden bg-slate-50">
      <Container>
        <div className="space-y-10 pb-10">
          {/* Header Section */}
          <div className="relative z-20 mt-10 md:mt-20 px-6 flex flex-col items-center mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Products page
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-prose mx-auto mb-8 leading-relaxed">
              Carefully curated picks from our best-loved essentials.
            </p>
          </div>

          {/* Billboard Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {billboards.slice(0, 6).map((billboard) => (
              <BillboardCard key={billboard.id} data={billboard} />
            ))}
          </div>

          {/* Filters + Product List */}
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <MobileFilters sizes={sizes} colors={colors} />
              <div className="hidden lg:block">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 && <NoResults />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopPage;
