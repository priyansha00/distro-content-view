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
            Among the first to bring GRC to Uttar Pradesh and Jaipur
          </h2>
          <div className="w-12 h-0.5 bg-brand-blue mx-auto mt-5" />
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
          <Quote className="h-8 w-8 text-brand-blue mb-6" />
          <div className="space-y-5 text-luxury-body text-muted-foreground leading-relaxed">
            <p>
              When we were planning Woman's Central on MG Road, my architect
              recommended Dolce GRC without hesitation. He told me they were
              among the first people doing this kind of work in Uttar Pradesh
              and Jaipur, and once you see the finish in person you understand
              why his recommendation carried so much weight.
            </p>
            <p>
              They are genuine pioneers in this industry. Long before GRC became
              a familiar name on Indian project sites, the team in Agra was
              already casting jali, cornices and columns by hand and shipping
              them across the region. The detailing on our facade still gets
              compliments from visitors years later.
            </p>
            <p>
              For anyone serious about a building that ages well, this is the
              team to talk to. Honest work, easy people, and a finish that
              speaks for itself.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm font-medium">Mr. Rajeev Surana</p>
            <p className="text-xs text-muted-foreground">
              Owner, Woman's Central, Agra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
