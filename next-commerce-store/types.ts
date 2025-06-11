export interface Product {
  id: string;
  category: Category;
  name: string;
  description?: string | null;
  isFeatured: boolean;
  isArchived: boolean;
  variations: Variation[];
  images: Image[];
  storeId: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Variation {
  id: string;
  size?: Size | null;
  color?: Color | null;
  price: number;
  stock: number;
  images: Image[];
  productId: string;
  sizeId?: string | null;
  colorId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  id: string;
  url: string;
  productId?: string | null;
  variationId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
  storeId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Color {
  id: string;
  name: string;
  value: string;
  storeId: string;
  createdAt: Date;
  updatedAt: Date;
}
