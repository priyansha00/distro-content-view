import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileImage, Save, Plus, Sparkles } from "lucide-react";
import { Product } from "@/types/Product";
import { useToast } from "@/hooks/use-toast";

interface ProductFormLuxuryProps {
  products: Product[];
  selectedProductId?: string;
  onSubmit: (productData: {
    id: string;
    name?: string;
    description: string;
    imageFile?: File;
  }) => void;
}

export function ProductFormLuxury({ products, selectedProductId, onSubmit }: ProductFormLuxuryProps) {
  const [productId, setProductId] = useState(selectedProductId || "");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [newProductName, setNewProductName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

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
        title: "Validation Error",
        description: "Product ID is required",
        variant: "destructive"
      });
      return;
    }

    if (!description.trim()) {
      toast({
        title: "Validation Error", 
        description: "Product description is required",
        variant: "destructive"
      });
      return;
    }

    if (isNewProduct && !newProductName.trim()) {
      toast({
        title: "Validation Error",
        description: "Product name is required for new products",
        variant: "destructive"
      });
      return;
    }

    onSubmit({
      id: productId,
      name: isNewProduct ? newProductName.trim() : undefined,
      description: description.trim(),
      imageFile: imageFile || undefined
    });

    toast({
      title: "Success",
      description: isNewProduct ? "Product created successfully" : "Product updated successfully",
      className: "border-luxury-gold/20 bg-card"
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
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid File Type",
          description: "Please select a valid image file",
          variant: "destructive"
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large", 
          description: "Image must be less than 5MB",
          variant: "destructive"
        });
        return;
      }

      setImageFile(file);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-luxury-heading mb-2">Update Product Content</h2>
        <p className="text-luxury-caption">Manage product information and media assets</p>
      </div>

      <Card className="border-border shadow-elegant-lg bg-card">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product Selection Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-luxury-body font-medium">Product Selection</Label>
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
                  <SelectTrigger className="bg-card border-border hover:border-luxury-gold/20 transition-colors duration-200 h-12">
                    <SelectValue placeholder="Select a product to edit..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border shadow-elegant-lg z-50">
                    <SelectItem value="new" className="text-luxury-gold font-medium py-3">
                      <div className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add New Product
                      </div>
                    </SelectItem>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id} className="py-3">
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{product.name}</span>
                          <span className="text-luxury-caption font-mono">{product.id}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Product ID */}
              <div className="space-y-2">
                <Label className="text-luxury-body font-medium">
                  Product ID {isNewProduct && <span className="text-destructive">*</span>}
                </Label>
                <Input
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  placeholder="Enter unique product ID..."
                  className="bg-card border-border hover:border-luxury-gold/20 focus:border-luxury-gold transition-colors duration-200 h-12 font-mono"
                  disabled={!isNewProduct}
                />
              </div>
            </div>

            {/* Product Name (for new products) */}
            {isNewProduct && (
              <div className="space-y-2">
                <Label className="text-luxury-body font-medium">
                  Product Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  placeholder="Enter product name..."
                  className="bg-card border-border hover:border-luxury-gold/20 focus:border-luxury-gold transition-colors duration-200 h-12"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <Label className="text-luxury-body font-medium">
                Product Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the product features, specifications, and key details..."
                rows={5}
                className="bg-card border-border hover:border-luxury-gold/20 focus:border-luxury-gold transition-colors duration-200 resize-none leading-relaxed"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label className="text-luxury-body font-medium">Product Image</Label>
              <div className="border-2 border-dashed border-border hover:border-luxury-gold/20 transition-colors duration-200 rounded-xl p-8 bg-luxury-pearl/30">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="text-center space-y-4">
                  {imageFile ? (
                    <div className="space-y-4">
                      <div className="w-24 h-24 mx-auto bg-luxury-gold/10 rounded-xl flex items-center justify-center">
                        <FileImage className="h-8 w-8 text-luxury-gold" />
                      </div>
                      <div>
                        <p className="text-luxury-body font-medium text-luxury-gold">{imageFile.name}</p>
                        <p className="text-luxury-caption">{(imageFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-24 h-24 mx-auto bg-muted/50 rounded-xl flex items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-luxury-body font-medium mb-1">Upload Product Image</p>
                        <p className="text-luxury-caption">JPG, PNG, or GIF • Max 5MB</p>
                      </div>
                    </div>
                  )}
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="border-luxury-gold/20 hover:border-luxury-gold hover:bg-luxury-gold/5 text-luxury-gold transition-all duration-200"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {imageFile ? "Change Image" : "Choose Image"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold hover:to-luxury-gold text-primary-foreground font-medium transition-all duration-200 shadow-elegant hover:shadow-elegant-lg"
                size="lg"
              >
                <div className="flex items-center gap-2">
                  {isNewProduct ? (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Create Product
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Update Product
                    </>
                  )}
                </div>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}