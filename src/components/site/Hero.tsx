import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-grc.jpg";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Craftsman holding a decorative GRC jali panel"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/85 via-luxury-navy/70 to-luxury-navy/30" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-brand-blue-light/90 mb-4">
            Top Building Materials Supplier
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Walls that wear <br />
            <span className="font-semibold">a little more grace.</span>
          </h1>
          <div className="w-12 h-0.5 bg-brand-blue mb-6" />
          <p className="text-base md:text-lg text-primary-foreground/85 mb-10 leading-relaxed">
            Handcrafted GRC jali, columns, cornices, planters and sculptures
            cast in our Agra workshop. Lightweight, weather ready and finished
            to the standard architects keep coming back for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-brand-blue hover:bg-brand-blue-dark text-primary-foreground h-12 px-8"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 px-8 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-luxury-navy"
            >
              <a href="tel:+919897021167">
                <Phone className="mr-2 h-4 w-4" />
                +91 98970 21167
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
