import { Product } from "@/types/Product";

interface Props { products: Product[] }

export function Gallery({ products }: Props) {
  const items = products.filter((p) => p.imageUrl).slice(0, 6);
  return (
    <section id="gallery" className="py-20 md:py-28 bg-luxury-pearl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-brand-blue mb-3 block">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Our Work in Detail</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((p, i) => (
            <div
              key={p.id}
              className={`relative overflow-hidden rounded-lg group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-primary-foreground font-medium">{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
