"use client";

import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
  variationId?: string; 
}

const CartItem: React.FC<CartItemProps> = ({ data, variationId }) => {
  const cart = useCart();

  // Select the variation (use variationId if provided, else first variation)
  const variation = variationId
    ? data.variations.find((v) => v.id === variationId)
    : data.variations[0];

  const onRemove = () => {
    cart.removeItem(data.id, variationId);
  };

  if (!variation) {
    return (
      <li className="flex py-6 border-b">
        <p className="text-red-500">No variation available for {data.name}</p>
      </li>
    );
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={
            variation.images[0]?.url ??
            data.images[0]?.url ??
            "/placeholder.png"
          }
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">
              {variation.color?.name ?? "No color"}
            </p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {variation.size?.name ?? "No size"}
            </p>
          </div>
          <Currency value={variation.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
