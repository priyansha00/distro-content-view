import { useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFormLuxury } from "@/components/ProductFormLuxury";
import { sampleProducts } from "@/data/sampleProducts";
import { Product } from "@/types/Product";

const Index = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [selectedProductId, setSelectedProductId] = useState<string>();

  const handleProductSubmit = (productData: {
    id: string;
    name?: string;
    description: string;
    imageFile?: File;
  }) => {
    const imageUrl = productData.imageFile 
      ? URL.createObjectURL(productData.imageFile) 
      : undefined;

    setProducts(prev => {
      const existingIndex = prev.findIndex(p => p.id === productData.id);
      
      if (existingIndex >= 0) {
        // Update existing product
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          description: productData.description,
          imageUrl: imageUrl || updated[existingIndex].imageUrl,
          lastUpdated: new Date()
        };
        return updated;
      } else {
        // Add new product
        const newProduct: Product = {
          id: productData.id,
          name: productData.name || `Product ${productData.id}`,
          description: productData.description,
          imageUrl,
          lastUpdated: new Date()
        };
        return [...prev, newProduct];
      }
    });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Refined Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl">
            <h1 className="text-luxury-title mb-3">Distributor Content Portal</h1>
            <div className="w-12 h-px bg-luxury-gold mb-4"></div>
            <p className="text-luxury-subtitle">Manage product information and media assets</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="space-y-16">
          {/* Product Catalog Grid */}
          <section>
            <ProductGrid 
              products={products} 
              onSelectProduct={handleSelectProduct}
            />
          </section>

          {/* Product Form */}
          <section>
            <ProductFormLuxury
              products={products}
              selectedProductId={selectedProductId}
              onSubmit={handleProductSubmit}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
