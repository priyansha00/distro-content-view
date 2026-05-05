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

      <div className="relative container mx-auto px-6 max-w-7xl py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl text-primary-foreground">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-primary-foreground/40" />
            <span className="eyebrow text-primary-foreground/70">Est. Agra · Architectural GRC</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.02] mb-8">
            Creating facades that <span className="text-primary-foreground/70">stand the test</span> of time,
            <span className="block">beautifully.</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/75 mb-10 leading-relaxed max-w-xl">
            Handcrafted GRC jali, columns, cornices, planters and sculptures
            cast in our Agra factory. Lightweight, weather ready and finished
            to the standard architects keep coming back for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary-foreground text-luxury-navy hover:bg-primary-foreground/90 h-12 px-8 rounded-none"
            >
              Specify with Confidence
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 px-8 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-luxury-navy rounded-none"
            >
              <a href="tel:+919897021167">
                <Phone className="mr-2 h-4 w-4" />
                +91 98970 21167
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-10 right-10 items-center gap-4 text-primary-foreground/60 text-xs tracking-[0.25em] uppercase">
          <span>Scroll</span>
          <span className="h-px w-12 bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  );
}
