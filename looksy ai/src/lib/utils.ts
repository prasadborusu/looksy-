import  { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export const mockProducts = [
  {
    id: 1,
    name: "Belted Coat",
    description: "Elegant white belted coat, perfect for formal occasions.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    category: "outerwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Beige"],
    featured: true,
  },
  {
    id: 2,
    name: "Classic Suit Jacket",
    description: "Sophisticated black suit jacket for a timeless look.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    category: "formal",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Gray"],
    featured: true,
  },
  {
    id: 3,
    name: "Designer Handbag",
    description: "Luxury handbag with essential accessories for the modern woman.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    sizes: [],
    colors: ["Black", "Brown", "Tan"],
    featured: true,
  },
  {
    id: 4,
    name: "Casual Tops Collection",
    description: "Versatile tops for everyday casual wear.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    category: "tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Blue", "Pink"],
    featured: false,
  },
  {
    id: 5,
    name: "Premium Collection Bundle",
    description: "Curated collection of trending outfits for the season.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    category: "collections",
    sizes: ["S", "M", "L"],
    colors: ["Assorted"],
    featured: true,
  },
  {
    id: 6,
    name: "Luxury Shopping Experience",
    description: "Personal shopping assistant for premium customers.",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    category: "services",
    sizes: [],
    colors: [],
    featured: true,
  }
];

export const categories = [
  { id: "outerwear", name: "Outerwear", count: 24 },
  { id: "formal", name: "Formal Wear", count: 18 },
  { id: "accessories", name: "Accessories", count: 36 },
  { id: "tops", name: "Tops", count: 42 },
  { id: "bottoms", name: "Bottoms", count: 28 },
  { id: "collections", name: "Collections", count: 6 },
  { id: "services", name: "Services", count: 3 }
];
 