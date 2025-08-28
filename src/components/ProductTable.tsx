import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Calendar } from "lucide-react";
import { Product } from "@/types/Product";

interface ProductTableProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

export function ProductTable({ products, onSelectProduct }: ProductTableProps) {
  return (
    <Card className="bg-card shadow-[var(--shadow-card)] border-border">
      <CardHeader className="bg-gradient-to-r from-primary-50 to-primary-100 border-b border-border">
        <CardTitle className="flex items-center gap-2 text-primary-700">
          <Package className="h-5 w-5" />
          Product Catalog
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-muted-foreground">Product ID</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Name</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Description</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Image</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow 
                  key={product.id} 
                  className="hover:bg-primary-50 transition-colors cursor-pointer group"
                  onClick={() => onSelectProduct(product.id)}
                >
                  <TableCell className="font-mono text-sm">
                    <Badge variant="secondary" className="bg-primary-100 text-primary-700 hover:bg-primary-200">
                      {product.id}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{product.name}</TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate text-muted-foreground">
                      {product.description}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center w-12 h-12 bg-muted rounded-md overflow-hidden">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Package className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="h-3 w-3" />
                      {product.lastUpdated.toLocaleDateString()}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}