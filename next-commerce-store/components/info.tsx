"use client";

import { Product } from "@/types";
import { useState } from "react";
import Button from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [selectedVariation, setSelectedVariation] = useState(
    data.variations[0]
  );

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
              setSelectedVariation(data.variations.find((v) => v.id === value)!)
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
        <Button className="flex items-center gap-x-2">Add To Cart</Button>
      </div>
    </div>
  );
};

export default Info;
