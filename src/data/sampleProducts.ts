import { Product } from "@/types/Product";

export const sampleProducts: Product[] = [
  {
    id: "PRD-001",
    name: "Professional Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
    lastUpdated: new Date("2024-01-15")
  },
  {
    id: "PRD-002", 
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking watch with GPS, heart rate monitoring, and smartphone connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
    lastUpdated: new Date("2024-01-12")
  },
  {
    id: "PRD-003",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height settings.",
    lastUpdated: new Date("2024-01-08")
  },
  {
    id: "PRD-004",
    name: "Portable Bluetooth Speaker",
    description: "Compact waterproof Bluetooth speaker with 360-degree sound and 12-hour battery life.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&crop=center",
    lastUpdated: new Date("2024-01-20")
  },
  {
    id: "PRD-005",
    name: "USB-C Charging Station",
    description: "Multi-port USB-C charging station with fast charging support for multiple devices simultaneously.",
    lastUpdated: new Date("2024-01-05")
  }
];