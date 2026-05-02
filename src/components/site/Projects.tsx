import { MapPin, ArrowUpRight } from "lucide-react";
import womansCentralFacade from "@/assets/projects/womans-central-facade.webp";
import womansCentralDetail from "@/assets/projects/womans-central-detail.webp";
import sculptWarriors from "@/assets/projects/sculpture-warriors.jpg";
import sculptDragon1 from "@/assets/projects/sculpture-dragon-1.jpg";
import sculptDragon2 from "@/assets/projects/sculpture-dragon-2.jpg";
import sculptDragon3 from "@/assets/projects/sculpture-dragon-3.jpg";
import sculptDancer from "@/assets/projects/sculpture-dancer.jpg";
import sculptNataraja from "@/assets/projects/sculpture-nataraja.jpg";

const featured = {
  name: "Woman's Central",
  location: "MG Road, Agra",
  scope: "Facade jali, fluted columns, cornices and decorative brackets",
  blurb:
    "A landmark retail facade on MG Road clad entirely in our handcrafted GRC. The fluted columns, layered cornices and signature white jali brackets give the building a quiet grandeur that holds up against the Agra sun, year after year.",
  image: womansCentralFacade,
  detail: womansCentralDetail,
  year: "2023",
};

const sculptures = [
  { src: sculptNataraja, label: "Nataraja, gold finish", span: "row-span-2" },
  { src: sculptWarriors, label: "Cloaked warriors, twin set" },
  { src: sculptDragon1, label: "Winged dragon, in studio" },
  { src: sculptDancer, label: "Classical dancer, wall mount" },
  { src: sculptDragon3, label: "Dragon, side profile" },
  { src: sculptDragon2, label: "Dragon, front view" },
];

const otherProjects = [
  {
    name: "Boutique Hotel Renovation",
    location: "Jaipur, Rajasthan",
    scope: "Hand cast brackets, balusters and ceiling cornices",
    blurb:
      "Period detailing recreated in lightweight GRC so the heritage facade got its grandeur back without loading the original walls.",
  },
  {
    name: "Private Residence",
    location: "Lucknow, Uttar Pradesh",
    scope: "Custom jali compound wall and entrance columns",
    blurb:
      "A clean white compound wall with a geometric jali pattern designed with the architect to give privacy without losing breeze.",
  },
  {
    name: "Temple Trust Project",
    location: "Mathura, Uttar Pradesh",
    scope: "Sculptures, mouldings and decorative paver blocks",
    blurb:
      "Cast in our Agra workshop and transported in panels, installed in under three weeks with zero on site dust or noise.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs tracking-[0.25em] uppercase text-brand-blue mb-4 block">
            Selected Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.1]">
            Buildings, facades and sculptures <br className="hidden md:block" />
            <span className="italic text-muted-foreground">we have helped finish.</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-blue mt-6" />
        </div>

        {/* Featured: Woman's Central */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-24 md:mb-32">
          <div className="lg:col-span-8 relative overflow-hidden rounded-2xl bg-luxury-pearl group">
            <img
              src={featured.image}
              alt="Woman's Central facade in Agra clad in Dolce GRC jali, columns and cornices"
              loading="lazy"
              className="w-full h-[420px] md:h-[620px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute top-5 left-5 bg-card/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-foreground">
              Featured Project · {featured.year}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-blue-dark mb-4">
                <MapPin className="h-3.5 w-3.5" />
                {featured.location}
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                {featured.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-blue mb-5">
                {featured.scope}
              </p>
              <p className="text-luxury-body text-muted-foreground leading-relaxed">
                {featured.blurb}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl">
              <img
                src={featured.detail}
                alt="Detail of GRC jali brackets and fluted columns at Woman's Central, Agra"
                loading="lazy"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </article>

        {/* Sculpture studio grid */}
        <div className="mb-12 md:mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-brand-blue mb-3 block">
              From the Studio
            </span>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">
              Hand cast sculptures
            </h3>
          </div>
          <p className="text-luxury-caption max-w-md">
            Each piece is sculpted, moulded and finished by our team in Agra. From
            classical bronzes to mythic creatures, all built in lightweight,
            weather ready GRC.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[280px] mb-24 md:mb-32">
          {sculptures.map((s, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-xl group bg-luxury-pearl ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/80 via-luxury-navy/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-primary-foreground text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-between">
                <span>{s.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Other projects list */}
        <div className="border-t border-border pt-16">
          <div className="mb-10">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-blue mb-3 block">
              More Work
            </span>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight">
              Other recent projects
            </h3>
          </div>

          <div className="divide-y divide-border">
            {otherProjects.map((p) => (
              <article
                key={p.name}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 group cursor-default"
              >
                <div className="md:col-span-4">
                  <h4 className="text-xl font-light tracking-tight mb-1.5 group-hover:text-brand-blue transition-colors">
                    {p.name}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {p.location}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-[0.15em] text-brand-blue">
                    {p.scope}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-luxury-body text-muted-foreground leading-relaxed">
                    {p.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
