import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-brand-blue flex items-center justify-center text-primary-foreground font-bold">D</div>
          <span className="text-luxury-body font-semibold tracking-tight">Dolce GRC</span>
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
          <button onClick={() => scrollTo("products")} className="text-muted-foreground hover:text-foreground transition-colors">Products</button>
          <button onClick={() => scrollTo("projects")} className="text-muted-foreground hover:text-foreground transition-colors">Projects</button>
          <button onClick={() => scrollTo("gallery")} className="text-muted-foreground hover:text-foreground transition-colors">Gallery</button>
          <button onClick={() => scrollTo("contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
        </nav>
        <Button
          onClick={() => scrollTo("contact")}
          className="bg-brand-blue hover:bg-brand-blue-dark text-primary-foreground"
        >
          Get a Quote
        </Button>
      </div>
    </header>
  );
}
