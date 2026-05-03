import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import womansCentralFacade from "@/assets/projects/womans-central-facade.webp";
import womansCentralDetail from "@/assets/projects/womans-central-detail.webp";
import womansCentralRender from "@/assets/projects/womans-central-render.jpg";
import womansCentralConstruction from "@/assets/projects/womans-central-construction.jpg";

import holidayInn1 from "@/assets/projects/holiday-inn-1.jpg";
import holidayInn2 from "@/assets/projects/holiday-inn-2.jpg";
import holidayInn3 from "@/assets/projects/holiday-inn-3.jpg";

import planterUrn from "@/assets/projects/planter-tall-urn.jpg";
import planterCream from "@/assets/projects/planter-classic-cream.jpg";
import planterSquare from "@/assets/projects/planter-tapered-square.jpg";
import planterBowl from "@/assets/projects/planter-bowl.jpg";

import sculptWarriors from "@/assets/projects/sculpture-warriors.jpg";
import sculptDragon1 from "@/assets/projects/sculpture-dragon-1.jpg";
import sculptDragon2 from "@/assets/projects/sculpture-dragon-2.jpg";
import sculptDragon3 from "@/assets/projects/sculpture-dragon-3.jpg";
import sculptDancer from "@/assets/projects/sculpture-dancer.jpg";
import sculptNataraja from "@/assets/projects/sculpture-nataraja.jpg";

type ProjectGallery = {
  name: string;
  location: string;
  scope: string;
  blurb: string;
  year?: string;
  images: { src: string; alt: string }[];
};

const galleries: ProjectGallery[] = [
  {
    name: "Woman's Central",
    location: "MG Road, Agra",
    scope: "Facade jali, fluted columns, cornices, decorative brackets",
    year: "2023",
    blurb:
      "A landmark retail facade clad in our handcrafted GRC. Fluted columns, layered cornices and signature white brackets give the building a quiet grandeur that holds up against the Agra sun, year after year.",
    images: [
      { src: womansCentralFacade, alt: "Woman's Central facade in Agra finished in Dolce GRC" },
      { src: womansCentralRender, alt: "Architectural render of Woman's Central facade by Dolce GRC" },
      { src: womansCentralConstruction, alt: "Woman's Central under construction with GRC cladding installed" },
      { src: womansCentralDetail, alt: "Detail of GRC brackets and columns at Woman's Central" },
    ],
  },
  {
    name: "Holiday Inn",
    location: "Agra, Uttar Pradesh",
    scope: "Sandstone finish wall cladding, jali balcony screens, cornice work",
    year: "2022",
    blurb:
      "Warm sandstone tones and laser sharp jali balustrades for one of Agra's flagship hospitality landmarks. Lightweight GRC panels let us match the heritage palette of the city without overloading the structure.",
    images: [
      { src: holidayInn1, alt: "Holiday Inn Agra exterior with Dolce GRC sandstone cladding and jali balconies" },
      { src: holidayInn2, alt: "Holiday Inn balcony jali screens and arched cornice detailing in GRC" },
      { src: holidayInn3, alt: "Close up of GRC sandstone wall cladding and jali at Holiday Inn Agra" },
    ],
  },
  {
    name: "FRP & GRC Planters",
    location: "Hotels and residences, Agra & Jaipur",
    scope: "Bespoke FRP and GRC planters, custom finishes",
    blurb:
      "From classic urn silhouettes to faceted modern forms, our planters sit in lobbies, courtyards and terraces across the region. Lightweight, weather ready and finished in pure white or warm cream to match the interior palette.",
    images: [
      { src: planterUrn, alt: "Tall white GRC planter with palm in a hotel lobby" },
      { src: planterCream, alt: "Classic cream coloured GRC urn planter with kentia palm" },
      { src: planterSquare, alt: "Faceted tapered square white FRP planter" },
      { src: planterBowl, alt: "Wide bowl shaped GRC planter with pebble dressing" },
    ],
  },
];

const sculptures = [
  { src: sculptNataraja, label: "Nataraja, gold finish" },
  { src: sculptWarriors, label: "Cloaked warriors, twin set" },
  { src: sculptDragon1, label: "Winged dragon, in studio" },
  { src: sculptDancer, label: "Classical dancer, wall mount" },
  { src: sculptDragon3, label: "Dragon, side profile" },
  { src: sculptDragon2, label: "Dragon, front view" },
];

const otherProjects = [
  {
    name: "Multi Speciality Hospital",
    location: "Karauli, Rajasthan",
    scope: "Facade cladding, jali ventilators and cornices",
    blurb:
      "A calm, sanitary white envelope for a regional hospital. GRC let the team finish a large facade quickly with zero on site dust, which mattered for an active medical campus.",
  },
  {
    name: "Private Residence",
    location: "Agra, Uttar Pradesh",
    scope: "Custom jali compound wall and entrance columns",
    blurb:
      "A clean white compound wall with a geometric jali pattern designed with the architect to give privacy without losing breeze.",
  },
  {
    name: "Temple Trust Project",
    location: "Bharatpur, Rajasthan",
    scope: "Sculptures, mouldings and decorative paver blocks",
    blurb:
      "Cast in our Agra factory and transported in panels, installed in under three weeks with zero on site dust or noise.",
  },
];

function ProjectCarousel({ project }: { project: ProjectGallery }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-24 md:mb-32">
      <div className="lg:col-span-8">
        <Carousel opts={{ loop: true }} className="relative">
          <CarouselContent>
            {project.images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="relative rounded-2xl overflow-hidden bg-luxury-pearl flex items-center justify-center h-[420px] md:h-[600px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                  {project.year && i === 0 && (
                    <div className="absolute top-5 left-5 bg-card/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-foreground">
                      {project.year}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] tracking-wider text-foreground">
                    {i + 1} / {project.images.length}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 md:left-4 bg-card/90 hover:bg-card border-border" />
          <CarouselNext className="right-3 md:right-4 bg-card/90 hover:bg-card border-border" />
        </Carousel>
      </div>

      <div className="lg:col-span-4 flex flex-col justify-center">
        <span className="inline-flex items-center gap-1.5 text-xs text-brand-blue-dark mb-4">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </span>
        <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-4">
          {project.name}
        </h3>
        <p className="text-xs uppercase tracking-[0.18em] text-brand-blue mb-5">
          {project.scope}
        </p>
        <p className="text-luxury-body text-muted-foreground leading-relaxed">
          {project.blurb}
        </p>
        <p className="text-xs text-muted-foreground/70 mt-5 italic">
          Swipe or use the arrows to view more images.
        </p>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.28em] uppercase text-muted-foreground">02 — Projects</span>
            <span className="h-px w-10 bg-foreground/20" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.02]">
            Buildings, facades and sculptures <br className="hidden md:block" />
            <em className="italic text-muted-foreground">we have helped finish.</em>
          </h2>
        </div>

        {galleries.map((g) => (
          <ProjectCarousel key={g.name} project={g} />
        ))}

        {/* Sculpture studio grid */}
        <div className="mb-12 md:mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-brand-blue mb-3 block">
              From the Studio
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight">
              Hand cast sculptures
            </h3>
          </div>
          <p className="text-luxury-caption max-w-md">
            Each piece is sculpted, moulded and finished by our team in Agra. From
            classical bronzes to mythic creatures, all built in lightweight,
            weather ready GRC.
          </p>
        </div>

        <div className="mb-24 md:mb-32">
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-3 md:-ml-4">
              {sculptures.map((s, i) => (
                <CarouselItem key={i} className="pl-3 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <figure className="relative overflow-hidden rounded-xl bg-luxury-pearl h-[280px] md:h-[340px] flex items-center justify-center">
                    <img
                      src={s.src}
                      alt={s.label}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                    <figcaption className="absolute bottom-3 left-3 right-3 text-foreground text-xs tracking-wide bg-card/85 backdrop-blur-sm rounded-md px-3 py-1.5">
                      {s.label}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-card/90 border-border" />
            <CarouselNext className="right-2 bg-card/90 border-border" />
          </Carousel>
        </div>

        {/* Other projects list */}
        <div className="border-t border-border pt-16">
          <div className="mb-10">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-blue mb-3 block">
              More Work
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight">
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
                  <h4 className="font-display text-xl font-light tracking-tight mb-1.5 group-hover:text-brand-blue transition-colors">
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
