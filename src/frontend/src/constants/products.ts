export interface Product {
  id: string;
  name: string;
  weight: string;
  unit: string;
  price: number;
  originalPrice?: number;
  description: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  gradientFrom: string;
  gradientTo: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "small-dozen",
    name: "Small Dozen",
    weight: "200–225 g per fruit · 1 Dozen",
    unit: "1 Dozen (12 fruits)",
    price: 1800,
    description:
      "Perfectly petite Alphonso mangoes, 200–225 g each. Sweet, aromatic, and great for juicing or snacking.",
    rating: 4.5,
    reviewCount: 96,
    gradientFrom: "#F9E4A0",
    gradientTo: "#F4C542",
  },
  {
    id: "medium-dozen",
    name: "Medium Dozen",
    weight: "230–260 g per fruit · 1 Dozen",
    unit: "1 Dozen (12 fruits)",
    price: 2000,
    description:
      "Our most popular grade. 230–260 g fruits with the classic Ratnagiri Alphonso flavour, rich and saffron-hued.",
    badge: "Best Seller",
    rating: 5,
    reviewCount: 312,
    gradientFrom: "#FBCD6B",
    gradientTo: "#E8860F",
  },
  {
    id: "large-dozen",
    name: "Large Dozen",
    weight: "260–300 g per fruit · 1 Dozen",
    unit: "1 Dozen (12 fruits)",
    price: 2200,
    description:
      "Premium jumbo Alphonso mangoes, 260–300 g each. Exceptionally pulpy — ideal for gifting or special occasions.",
    rating: 4.5,
    reviewCount: 74,
    gradientFrom: "#FAD961",
    gradientTo: "#F76B1C",
  },
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const PEAK_MONTHS = ["Apr", "May"];
