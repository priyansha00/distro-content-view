import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Calendar, Edit3 } from "lucide-react";
import { Product } from "@/types/Product";

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

export function ProductGrid({ products, onSelectProduct }: ProductGridProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-luxury-heading mb-2">Product Catalog</h2>
        <p className="text-luxury-caption">{products.length} products available</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="group cursor-pointer transition-all duration-200 hover:shadow-elegant-lg bg-card border-border hover:border-luxury-gold/20 overflow-hidden"
            onClick={() => onSelectProduct(product.id)}
          >
            <CardContent className="p-0">
              {/* Image Section */}
              <div className="aspect-square bg-luxury-platinum overflow-hidden relative">
                {product.imageUrl ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                )}
                
                {/* Edit Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-card/90 backdrop-blur-sm border border-luxury-gold/20 rounded-full p-3">
                    <Edit3 className="h-4 w-4 text-luxury-gold" />
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Product ID Badge */}
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="secondary" 
                    className="bg-luxury-pearl text-luxury-navy font-mono text-xs px-2 py-1"
                  >
                    {product.id}
                  </Badge>
                  <div className="flex items-center text-luxury-caption">
                    <Calendar className="h-3 w-3 mr-1" />
                    {product.lastUpdated.toLocaleDateString()}
                  </div>
                </div>
                
                {/* Product Name */}
                <h3 className="text-luxury-body font-medium line-clamp-1 group-hover:text-luxury-gold transition-colors duration-200">
                  {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-luxury-caption line-clamp-3 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}