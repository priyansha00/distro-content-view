import { MapPin } from "lucide-react";

const projects = [
  {
    name: "Women's Central, Agra",
    location: "Agra, Uttar Pradesh",
    scope: "GRC jali facade, cornices and decorative columns",
    blurb:
      "A landmark commercial building on MG Road where our jali screens filter the harsh Agra sun while keeping the elevation timeless and white."
  },
  {
    name: "Boutique Hotel Renovation",
    location: "Jaipur, Rajasthan",
    scope: "Hand cast brackets, balusters and ceiling cornices",
    blurb:
      "Period detailing recreated in lightweight GRC so the heritage facade got its grandeur back without loading the original walls."
  },
  {
    name: "Private Residence",
    location: "Lucknow, Uttar Pradesh",
    scope: "Custom jali compound wall and entrance columns",
    blurb:
      "A clean white compound wall with a geometric jali pattern designed with the architect to give privacy without losing breeze."
  },
  {
    name: "Temple Trust Project",
    location: "Mathura, Uttar Pradesh",
    scope: "Sculptures, mouldings and decorative paver blocks",
    blurb:
      "Cast in our Agra workshop and transported in panels, installed in under three weeks with zero on site dust or noise."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">
            Recent Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Buildings we have helped finish
          </h2>
          <div className="w-12 h-0.5 bg-brand-blue mx-auto mt-5" />
          <p className="text-luxury-caption max-w-2xl mx-auto mt-5">
            A short list of work we are proud of. Many more are on site or in
            production right now and we will keep adding them here as they open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group p-7 md:p-8 rounded-xl border border-border bg-card hover:border-brand-blue/30 hover:shadow-elegant transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-light tracking-tight">
                  {p.name}
                </h3>
                <span className="shrink-0 inline-flex items-center gap-1 text-xs text-brand-blue-dark bg-brand-blue-light rounded-full px-3 py-1">
                  <MapPin className="h-3 w-3" />
                  {p.location}
                </span>
              </div>
              <p className="text-sm uppercase tracking-wider text-brand-blue mb-3">
                {p.scope}
              </p>
              <p className="text-luxury-body text-muted-foreground leading-relaxed">
                {p.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
