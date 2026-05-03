import logoDg from "@/assets/logo-dg.png";

export function Footer() {
  return (
    <footer className="bg-luxury-navy text-primary-foreground/80">
      <div className="container mx-auto px-6 max-w-7xl py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoDg} alt="Dolce GRC monogram" width={36} height={36} loading="lazy" className="h-9 w-9 object-contain bg-primary-foreground rounded-md p-1" />
            <span className="text-primary-foreground font-semibold">Dolce GRC</span>
          </div>
          <p className="text-sm leading-relaxed">
            Top supplier of GRC building materials — jali, planters, sculptures,
            balusters, mouldings and wall cladding.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-medium mb-3">Contact</h4>
          <ul className="text-sm space-y-2">
            <li><a href="tel:+919897021167" className="hover:text-primary-foreground">+91 98970 21167</a></li>
            <li><a href="mailto:suneet.grc@gmail.com" className="hover:text-primary-foreground">suneet.grc@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-medium mb-3">Hours</h4>
          <p className="text-sm">Mon – Sat · 9:00 – 19:00</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Dolce GRC. All rights reserved.
      </div>
    </footer>
  );
}
