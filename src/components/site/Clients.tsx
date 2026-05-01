import { Quote } from "lucide-react";

export function Clients() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-luxury-pearl">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Pioneers of GRC in Uttar Pradesh and Jaipur
          </h2>
          <div className="w-12 h-0.5 bg-brand-blue mx-auto mt-5" />
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
          <Quote className="h-8 w-8 text-brand-blue mb-6" />
          <div className="space-y-5 text-luxury-body text-muted-foreground leading-relaxed">
            <p>
              I found Dolce GRC through my architect, who I trust completely.
              He told me they were the first people doing this kind of work in
              Uttar Pradesh and Jaipur, and once you see the finish you
              understand why his recommendation carried so much weight.
            </p>
            <p>
              They are genuine pioneers in this industry. Long before GRC became
              a buzzword on Indian project sites, the team in Agra was already
              casting jali, cornices and columns by hand and shipping them across
              the region. Architects, builders and homeowners keep coming back
              for the same reason I did, the work is honest and the people are
              easy to talk to.
            </p>
            <p>
              The few projects on this page are just a small sample. There is a
              lot more in the workshop and on site right now. We will keep
              sharing the rest as the buildings open.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm font-medium">Suneet, Dolce GRC</p>
            <p className="text-xs text-muted-foreground">
              Manufacturer, MG Road, Agra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
