import { Product } from "@/types/Product";
import headphonesImg from "@/assets/headphones-luxury.webp";
import watchImg from "@/assets/watch-luxury.webp";
import chairImg from "@/assets/chair-luxury.webp";
import speakerImg from "@/assets/speaker-luxury.webp";
import chargingStationImg from "@/assets/charging-station-luxury.webp";

export const sampleProducts: Product[] = [
  {
    id: "PRD-001",
    name: "Professional Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    imageUrl: headphonesImg,
    lastUpdated: new Date("2024-01-15")
  },
  {
    id: "PRD-002", 
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking watch with GPS, heart rate monitoring, and smartphone connectivity.",
    imageUrl: watchImg,
    lastUpdated: new Date("2024-01-12")
  },
  {
    id: "PRD-003",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height settings.",
    imageUrl: chairImg,
    lastUpdated: new Date("2024-01-08")
  },
  {
    id: "PRD-004",
    name: "Portable Bluetooth Speaker",
    description: "Compact waterproof Bluetooth speaker with 360-degree sound and 12-hour battery life.",
    imageUrl: speakerImg,
    lastUpdated: new Date("2024-01-20")
  },
  {
    id: "PRD-005",
    name: "USB-C Charging Station",
    description: "Multi-port USB-C charging station with fast charging support for multiple devices simultaneously.",
    imageUrl: chargingStationImg,
    lastUpdated: new Date("2024-01-05")
  }
];