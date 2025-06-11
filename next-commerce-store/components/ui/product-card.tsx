"use client";

import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const [selectedVariationId, setSelectedVariationId] = useState(
    data.variations[0]?.id || ""
  );

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data, selectedVariationId);
  };

  const selectedVariation =
    data.variations.find((v) => v.id === selectedVariationId) ||
    data.variations[0];
  const price = selectedVariation?.price ?? 0;
  const imageUrl =
    selectedVariation?.images[0]?.url ??
    data.images[0]?.url ??
    "/placeholder.png";

  if (!selectedVariation) {
    return (
      <div className="bg-white rounded-xl border p-3 space-y-4">
        <p>{data.name} (No variations available)</p>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={imageUrl}
          alt={data.name}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Variation Selector */}
      <Select
        value={selectedVariationId}
        onValueChange={setSelectedVariationId}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select variation" />
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
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={price} />
      </div>
    </div>
  );
};

export default ProductCard;
