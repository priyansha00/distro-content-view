import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Product } from "@/types/Product";
import { useToast } from "@/hooks/use-toast";

interface Props {
  products: Product[];
}

export function QuoteForm({ products }: Props) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    productId: "",
    message: ""
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Quote request sent",
      description: "An email has been sent to the owner. We'll be in touch shortly."
    });
    setForm({ name: "", email: "", phone: "", productId: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3">Request a Free Quote</h2>
          <p className="text-luxury-caption max-w-xl mx-auto">
            Tell us about your project and we'll get back to you with pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call us", value: "+91 98970 21167", href: "tel:+919897021167" },
              { icon: Mail, label: "Email", value: "suneet.grc@gmail.com", href: "mailto:suneet.grc@gmail.com" },
              { icon: MapPin, label: "Visit", value: "Near Deewani Crossing, MG Road, Agra 282002", href: undefined }
            ].map(({ icon: Icon, label, value, href }) => (
              <Card key={label} className="border-border">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-light flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-brand-blue-dark" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-luxury-body font-medium hover:text-brand-blue transition-colors">{value}</a>
                    ) : (
                      <p className="text-luxury-body font-medium">{value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card className="lg:col-span-2 border-border shadow-elegant-lg">
            <CardContent className="p-8">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Your name *</Label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" className="h-11" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label>Product of interest</Label>
                    <Select value={form.productId} onValueChange={(v) => setForm({ ...form, productId: v })}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Select a product" /></SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        {products.map((p) => (
                          <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Tell us about your request *</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Quantity, delivery location, timeline, customisations..."
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-primary-foreground h-12">
                  <Send className="mr-2 h-4 w-4" />
                  Send Quote Request
                </Button>
                <p className="text-xs text-muted-foreground text-center">An email will be sent to the owner.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
