import { ShieldCheck, Hammer, Users, Truck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Quality Assured", desc: "Carefully sourced raw materials and rigorous QC on every product we ship." },
  { icon: Hammer, title: "Expert Craftsmanship", desc: "Skilled artisans casting GRC pieces with precision and consistency." },
  { icon: Users, title: "Customer First", desc: "Friendly, knowledgeable staff ready to help you choose the right material." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Safe, on-time delivery of building materials to project sites across India." }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-4 block">About Dolce GRC</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Eight years of GRC, three decades of craft
            </h2>
            <div className="w-12 h-0.5 bg-brand-blue mb-6" />
            <p className="text-luxury-body text-muted-foreground leading-relaxed mb-4">
              Dolce GRC is the architectural concrete studio of S K Tiles, our
              parent house on MG Road, Agra. For the last eight years our Dolce
              GRC line has been casting jali screens, fluted columns, cornices,
              balusters, planters, paver blocks and bespoke architectural
              elements for homes, hotels, hospitals and temples across Uttar
              Pradesh, Rajasthan and beyond.
            </p>
            <p className="text-luxury-body text-muted-foreground leading-relaxed mb-4">
              S K Tiles itself has been in the trade for thirty years, building
              a reputation for vitrified tiles, double charge and full body
              porcelain, large format slabs, GVT and PGVT collections, designer
              wall tiles, anti skid outdoor pavers and curated natural stone.
              Three decades of selection, specification and on site know how now
              sit behind every Dolce GRC piece that leaves the workshop.
            </p>
            <p className="text-luxury-body text-muted-foreground leading-relaxed">
              Architects come to us when they want crisp detail, clean finishes
              and a partner who understands the full envelope, from the floor
              specification to the facade jali. Every piece is moulded in our
              own workshop, hand finished by craftsmen who have been with us
              for years, and dispatched ready to install.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-border bg-background hover:border-brand-blue/30 hover:shadow-elegant transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-light flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand-blue-dark" />
                </div>
                <h3 className="text-luxury-body font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
