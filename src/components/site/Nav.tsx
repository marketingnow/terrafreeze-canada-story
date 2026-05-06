import { useState } from "react";
import { Menu, X, Snowflake } from "lucide-react";

const links = [
  { label: "Our Story", href: "#story" },
  { label: "Ingredients", href: "https://terrafreeze.ca/ingredients/" },
  { label: "Conditions", href: "https://terrafreeze.ca/conditions/" },
  { label: "Blog", href: "https://terrafreeze.ca/blog/" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-5 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-brand">
          <Snowflake className="h-7 w-7" strokeWidth={1.75} />
          <span className="font-serif text-2xl tracking-tight leading-none">
            TERRAFREEZE
          </span>
          <span className="text-base leading-none" aria-label="Canada">🇨🇦</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="https://terrafreeze.ca/shop/"
            className="inline-flex items-center rounded-full bg-amber-cta px-5 py-2.5 text-sm font-semibold text-amber-cta-foreground hover:opacity-90 transition"
          >
            Shop Now
          </a>
        </div>
        <button
          className="md:hidden text-brand"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-foreground/80">
                {l.label}
              </a>
            ))}
            <a
              href="https://terrafreeze.ca/shop/"
              className="inline-flex justify-center rounded-full bg-amber-cta px-5 py-3 text-sm font-semibold text-amber-cta-foreground"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
