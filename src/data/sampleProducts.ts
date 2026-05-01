import { Product } from "@/types/Product";
import jaliImg from "@/assets/prod-jali.jpg";
import planterImg from "@/assets/prod-planter.jpg";
import sculptureImg from "@/assets/prod-sculpture.jpg";
import balusterImg from "@/assets/prod-baluster.jpg";
import mouldingImg from "@/assets/prod-moulding.jpg";
import claddingImg from "@/assets/prod-cladding.jpg";

export const sampleProducts: Product[] = [
  {
    id: "GRC-001",
    name: "GRC Jali",
    description: "Intricately crafted Glass Reinforced Concrete jali screens. Lightweight, durable, and perfect for facades, partitions, and ventilated walls with timeless geometric patterns.",
    imageUrl: jaliImg,
    lastUpdated: new Date("2025-03-15")
  },
  {
    id: "FRP-002",
    name: "FRP Planters",
    description: "Premium Fibre Reinforced Plastic planters in modern silhouettes. Weatherproof, lightweight, and designed to elevate landscapes, terraces, and indoor spaces.",
    imageUrl: planterImg,
    lastUpdated: new Date("2025-03-12")
  },
  {
    id: "GRC-003",
    name: "Sculptures",
    description: "Hand-finished classical and contemporary sculptures cast in GRC. Built to weather the elements while bringing artistry to gardens, lobbies, and architectural niches.",
    imageUrl: sculptureImg,
    lastUpdated: new Date("2025-03-08")
  },
  {
    id: "GRC-004",
    name: "Balusters",
    description: "Elegant balusters and railings for balconies, staircases, and terraces. Strong GRC construction with refined detailing inspired by classical architecture.",
    imageUrl: balusterImg,
    lastUpdated: new Date("2025-03-20")
  },
  {
    id: "GRC-005",
    name: "Moulding",
    description: "Decorative cornices, trims, and architectural mouldings to add character to facades, ceilings, and door frames. Easy to install with crisp profiles.",
    imageUrl: mouldingImg,
    lastUpdated: new Date("2025-03-05")
  },
  {
    id: "WC-006",
    name: "Wall Cladding",
    description: "Textured wall cladding panels that bring warmth and dimension to interior and exterior walls. Lightweight, durable, and available in natural finishes.",
    imageUrl: claddingImg,
    lastUpdated: new Date("2025-03-22")
  }
];
