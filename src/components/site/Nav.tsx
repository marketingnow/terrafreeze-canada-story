import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/terrafreeze-logo.png";

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
        <a href="/" className="flex items-center">
          <img src={logo} alt="TERRAFREEZE Canada" width={180} height={36} className="h-8 w-auto" />
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
            className="inline-flex items-center rounded-full bg-maple px-5 py-2.5 text-sm font-semibold text-maple-foreground hover:opacity-90 transition"
          >
            Shop Now
          </a>
        </div>
        <button
          className="md:hidden text-brand-deep"
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
              className="inline-flex justify-center rounded-full bg-maple px-5 py-3 text-sm font-semibold text-maple-foreground"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
