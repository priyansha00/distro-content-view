import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
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

    setProducts((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === productData.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          description: productData.description,
          imageUrl: imageUrl || updated[existingIndex].imageUrl,
          lastUpdated: new Date()
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: productData.id,
          name: productData.name || `Product ${productData.id}`,
          description: productData.description,
          imageUrl,
          lastUpdated: new Date()
        }
      ];
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* Product catalogue */}
        <section id="products" className="py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">Available Products</span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Our Product Range</h2>
              <div className="w-12 h-0.5 bg-brand-blue mx-auto mt-5" />
            </div>
            <ProductGrid products={products} onSelectProduct={setSelectedProductId} />
          </div>
        </section>

        <Gallery products={products} />
        <QuoteForm products={products} />

        {/* Distributor admin section (kept) */}
        <section id="portal" className="py-20 md:py-28 bg-luxury-pearl/40 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">Distributor Portal</span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Manage Product Content</h2>
              <p className="text-luxury-caption mt-3">Internal tool — add or update product information and media.</p>
            </div>
            <ProductFormLuxury
              products={products}
              selectedProductId={selectedProductId}
              onSubmit={handleProductSubmit}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
