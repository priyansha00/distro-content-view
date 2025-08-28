import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileImage, Save, Plus } from "lucide-react";
import { Product } from "@/types/Product";
import { useToast } from "@/hooks/use-toast";

interface ProductFormProps {
  products: Product[];
  selectedProductId?: string;
  onSubmit: (productData: {
    id: string;
    description: string;
    imageFile?: File;
  }) => void;
}

export function ProductForm({ products, selectedProductId, onSubmit }: ProductFormProps) {
  const [productId, setProductId] = useState(selectedProductId || "");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [newProductName, setNewProductName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Update form when selectedProductId changes
  useEffect(() => {
    if (selectedProductId) {
      const product = products.find(p => p.id === selectedProductId);
      if (product) {
        setProductId(selectedProductId);
        setDescription(product.description);
        setIsNewProduct(false);
      }
    }
  }, [selectedProductId, products]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!productId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a Product ID",
        variant: "destructive"
      });
      return;
    }

    if (!description.trim()) {
      toast({
        title: "Error", 
        description: "Please enter a description",
        variant: "destructive"
      });
      return;
    }

    onSubmit({
      id: productId,
      description: description.trim(),
      imageFile: imageFile || undefined
    });

    toast({
      title: "Success",
      description: isNewProduct ? "Product created successfully!" : "Product updated successfully!"
    });

    // Reset form
    setProductId("");
    setDescription("");
    setImageFile(null);
    setIsNewProduct(false);
    setNewProductName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Error",
          description: "Please select a valid image file",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error", 
          description: "Image file must be less than 5MB",
          variant: "destructive"
        });
        return;
      }

      setImageFile(file);
    }
  };

  return (
    <Card className="bg-card shadow-[var(--shadow-card)] border-border">
      <CardHeader className="bg-gradient-to-r from-primary-50 to-primary-100 border-b border-border">
        <CardTitle className="flex items-center gap-2 text-primary-700">
          <Plus className="h-5 w-5" />
          {isNewProduct ? "Add New Product" : "Update Product Content"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Selection */}
            <div className="space-y-2">
              <Label htmlFor="product-select">Product</Label>
              <div className="flex gap-2">
                <Select
                  value={isNewProduct ? "new" : productId}
                  onValueChange={(value) => {
                    if (value === "new") {
                      setIsNewProduct(true);
                      setProductId("");
                      setDescription("");
                    } else {
                      setIsNewProduct(false);
                      setProductId(value);
                      const product = products.find(p => p.id === value);
                      if (product) {
                        setDescription(product.description);
                      }
                    }
                  }}
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a product..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border z-50">
                    <SelectItem value="new" className="text-primary font-medium">
                      ➕ Add New Product
                    </SelectItem>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.id} - {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* New Product Name (only if adding new) */}
            {isNewProduct && (
              <div className="space-y-2">
                <Label htmlFor="product-name">Product Name</Label>
                <Input
                  id="product-name"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  placeholder="Enter product name..."
                  className="bg-background"
                />
              </div>
            )}

            {/* Product ID (editable for new products) */}
            <div className="space-y-2">
              <Label htmlFor="product-id">Product ID</Label>
              <Input
                id="product-id"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                placeholder="Enter product ID..."
                className="bg-background font-mono"
                disabled={!isNewProduct}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description..."
              rows={4}
              className="bg-background resize-none"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="image-file">Product Image</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 bg-muted/30 hover:bg-muted/50 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                id="image-file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="text-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="mb-2"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Choose Image
                </Button>
                {imageFile ? (
                  <div className="flex items-center justify-center gap-2 text-sm text-success">
                    <FileImage className="h-4 w-4" />
                    {imageFile.name}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Select an image file (JPG, PNG, GIF) - Max 5MB
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-600 text-primary-foreground"
            size="lg"
          >
            <Save className="mr-2 h-4 w-4" />
            {isNewProduct ? "Add Product" : "Update Product"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}