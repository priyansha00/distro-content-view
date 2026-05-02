import womansCentralFacade from "@/assets/projects/womans-central-facade.webp";
import womansCentralDetail from "@/assets/projects/womans-central-detail.webp";
import womansCentralConstruction from "@/assets/projects/womans-central-construction.jpg";
import holidayInn1 from "@/assets/projects/holiday-inn-1.jpg";
import holidayInn2 from "@/assets/projects/holiday-inn-2.jpg";
import sculptNataraja from "@/assets/projects/sculpture-nataraja.jpg";
import sculptWarriors from "@/assets/projects/sculpture-warriors.jpg";
import planterUrn from "@/assets/projects/planter-tall-urn.jpg";
import planterCream from "@/assets/projects/planter-classic-cream.jpg";

const items = [
  { src: womansCentralFacade, label: "Woman's Central, Agra" },
  { src: holidayInn1, label: "Holiday Inn, Agra" },
  { src: womansCentralDetail, label: "GRC brackets and columns" },
  { src: sculptNataraja, label: "Nataraja sculpture" },
  { src: holidayInn2, label: "Jali balcony screens" },
  { src: planterUrn, label: "Tall urn planter" },
  { src: sculptWarriors, label: "Hand cast sculptures" },
  { src: womansCentralConstruction, label: "Cladding installation" },
  { src: planterCream, label: "Classic cream planter" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-luxury-pearl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Our Work in Detail</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group bg-card ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-primary-foreground font-medium">{it.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
