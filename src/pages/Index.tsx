import { useState } from "react";
import { ProductTable } from "@/components/ProductTable";
import { ProductForm } from "@/components/ProductForm";
import { sampleProducts } from "@/data/sampleProducts";
import { Product } from "@/types/Product";
import { Building2, Package } from "lucide-react";

const Index = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [selectedProductId, setSelectedProductId] = useState<string>();

  const handleProductSubmit = (productData: {
    id: string;
    description: string;
    imageFile?: File;
  }) => {
    // In a real app, you would upload the image and get back a URL
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
          name: `Product ${productData.id}`, // In real app, this would come from form
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
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Distributor Content Portal</h1>
              <p className="text-muted-foreground">Manage product information and media assets</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Products Table */}
        <ProductTable 
          products={products} 
          onSelectProduct={handleSelectProduct}
        />

        {/* Product Form */}
        <ProductForm
          products={products}
          selectedProductId={selectedProductId}
          onSubmit={handleProductSubmit}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>Content Portal v1.0</span>
            </div>
            <div>
              {products.length} products in catalog
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
