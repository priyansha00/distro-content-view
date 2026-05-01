export function Footer() {
  return (
    <footer className="bg-luxury-navy text-primary-foreground/80">
      <div className="container mx-auto px-6 max-w-7xl py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-md bg-brand-blue flex items-center justify-center font-bold text-primary-foreground">D</div>
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
            <li><a href="tel:+918433096575" className="hover:text-primary-foreground">+91 84330 96575</a></li>
            <li><a href="mailto:hello@dolcegrc.com" className="hover:text-primary-foreground">hello@dolcegrc.com</a></li>
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
