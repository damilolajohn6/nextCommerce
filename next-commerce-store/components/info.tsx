"use client";

import { Product } from "@/types";
import { useState, MouseEventHandler } from "react";
import Button from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product & {
    variations: {
      id: string;
      size?: { id: string; name: string } | null;
      color?: { id: string; name: string } | null;
      price: number;
    }[];
  };
}

const Info: React.FC<InfoProps> = ({ data }) => {
   const cart = useCart();

  const [selectedVariationId, setSelectedVariationId] = useState(
      data.variations[0]?.id || ""
    );


  const selectedVariation =
    data.variations.find((v) => v.id === selectedVariationId) ||
    data.variations[0];

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      cart.addItem(data, selectedVariationId);
    };

    if (!selectedVariation) {
      return (
        <div className="bg-white rounded-xl border p-3 space-y-4">
          <p>{data.name} (No variations available)</p>
        </div>
      );
    }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          ${selectedVariation.price.toFixed(2)}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <Select
            value={selectedVariation.id}
            onValueChange={(value) =>
              setSelectedVariationId(value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {data.variations.map((variation) => (
                <SelectItem key={variation.id} value={variation.id}>
                  {variation.size?.name || "No Size"} /{" "}
                  {variation.color?.name || "No Color"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">Add To Cart</Button>
      </div>
    </div>
  );
};

export default Info;
