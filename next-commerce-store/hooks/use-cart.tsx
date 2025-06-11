import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

interface CartItem {
  product: Product;
  variationId?: string; // Track selected variation
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product, variationId?: string) => void;
  removeItem: (id: string, variationId?: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, variationId?: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) =>
            item.product.id === data.id && item.variationId === variationId
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...currentItems, { product: data, variationId }] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string, variationId?: string) => {
        set({
          items: get().items.filter(
            (item) =>
              !(item.product.id === id && item.variationId === variationId)
          ),
        });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
