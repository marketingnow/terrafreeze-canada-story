import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Leaf, ShieldCheck, FlaskConical, MapPin, Sparkles } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import lifestyleHands from "@/assets/lifestyle-hands.jpg";
import lifestyleWalk from "@/assets/lifestyle-walk.jpg";
import lifestyleCanada from "@/assets/lifestyle-canada.jpg";
import product2oz from "@/assets/product-2oz.png";
import product3pack from "@/assets/product-3pack.png";
import product6pack from "@/assets/product-6pack.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Story — TERRAFREEZE Canada" },
      {
        name: "description",
        content:
          "Real relief for real Canadians. A Health Canada NPN-registered topical pain relief cream, custom-developed and manufactured in Canada.",
      },
      { property: "og:title", content: "Our Story — TERRAFREEZE Canada" },
      {
        property: "og:description",
        content: "Health Canada NPN-registered topical pain relief, made for Canadians.",
      },
    ],
  }),
  component: AboutPage,
});

const trustItems = [
  { icon: BadgeCheck, label: "Health Canada NPN" },
  { icon: ShieldCheck, label: "Batch Tested" },
  { icon: Leaf, label: "Emu Oil & Arnica" },
  { icon: FlaskConical, label: "Custom Formula" },
  { icon: MapPin, label: "Made in Canada" },
  { icon: Sparkles, label: "Fast Absorbing" },
];

const noTo = [
  "Parabens",
  "Phthalates",
  "Synthetic Dyes",
  "Animal Testing",
  "Sulfates",
  "Mineral Oil",
];

const tips = [
  {
    title: "Apply to clean, dry skin.",
    body: "Freshly washed skin absorbs the active ingredients faster and more evenly. Avoid layering over lotion or other topicals.",
  },
  {
    title: "Massage in for 30–60 seconds.",
    body: "Working the cream in with circular pressure helps the actives penetrate deeper, which is where the relief actually comes from.",
  },
  {
    title: "Use it consistently for chronic pain.",
    body: "One application helps. Daily use builds on that. For arthritis and nerve pain especially, consistency matters more than quantity.",
  },
];

const products = [
  { img: product2oz, name: "Single 2oz", price: "$24.99", was: "$44.99", badge: null,
    href: "https://terrafreeze.ca/product/terrafreeze-pain-relief-cream-1-package-2oz/" },
  { img: product3pack, name: "3-Pack 6oz", price: "$39.97", was: "$89.99", badge: "Best Value",
    href: "https://terrafreeze.ca/shop/" },
  { img: product6pack, name: "6-Pack 12oz", price: "$69.97", was: "$149.99", badge: null,
    href: "https://terrafreeze.ca/product/terrafreeze-pain-relief-cream-6-package/" },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />

      {/* SECTION 1 — Split hero (image left, colored panel right) */}
      <section className="grid md:grid-cols-2">
        <div className="bg-secondary">
          <img
            src={lifestyleHands}
            alt="Applying TERRAFREEZE relief cream"
            width={800}
            height={800}
            className="w-full h-[420px] md:h-[560px] object-cover"
          />
        </div>
        <div className="bg-panel text-panel-foreground flex items-center">
          <div className="px-8 md:px-14 py-16 md:py-20 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] mb-5 opacity-70">
              A Canadian Story · Real Relief
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
              Hi, We're TERRAFREEZE Canada.
            </h1>
            <div className="space-y-4 text-base md:text-[17px] leading-relaxed">
              <p>
                We started with a simple belief: Canadians dealing with muscle and joint
                pain deserve a topical relief cream that was actually built for them — not
                an afterthought, but a formula custom-developed, manufactured, and held to
                Health Canada's standards from day one.
              </p>
              <p>
                We adapted the formula for this market, earned our NPN registration, and
                set up manufacturing here. If you're going to put something on your body
                every day, it should meet the highest standard available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Three lifestyle tiles with caption strap */}
      <section id="story" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-foreground/70 text-lg md:text-xl mb-14 max-w-3xl mx-auto font-serif italic">
            Honest formulas. Transparent labels. We're dedicated to keeping you in the know.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: lifestyleHands,
                title: "Real",
                body: "Real Canadians, real pain, real relief — no marketing fluff.",
              },
              {
                img: lifestyleWalk,
                title: "Trusted",
                body: "Health Canada NPN registered, batch-tested, every time.",
              },
              {
                img: lifestyleCanada,
                title: "Canadian",
                body: "Custom-developed and manufactured here at home.",
              },
            ].map((t) => (
              <figure key={t.title} className="text-center">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={t.img}
                    alt={t.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <figcaption className="mt-6">
                  <h3 className="font-serif text-2xl mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {t.body}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Trust band (icons row, like cleanbeauty's "Products You Can Trust") */}
      <section className="bg-brand-deep text-white px-5 py-12 md:py-14">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="md:max-w-[220px] text-center md:text-left">
            <h2 className="text-white font-serif text-2xl md:text-3xl leading-tight">
              A Cream You Can Trust
            </h2>
          </div>
          <ul className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {trustItems.map((t) => (
              <li key={t.label} className="flex flex-col items-center gap-2">
                <t.icon className="h-7 w-7" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-wider opacity-90">
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4 — No-To list */}
      <section className="px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-4">No-To List</h2>
          <p className="text-muted-foreground mb-8">
            Confused about all the ingredients you can't pronounce? We're not.
            Stay informed with this handy list of ingredients we never use.
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-brand-deep">
            {noTo.map((n, i) => (
              <span key={n} className="font-serif text-lg md:text-xl">
                #no{n.replace(/\s/g, "")}
                {i < noTo.length - 1 && <span className="opacity-30 ml-3">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — NPN transparency band */}
      <section className="bg-secondary border-y border-border px-5 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Behind the Label</h2>
          <p className="text-lg leading-relaxed text-foreground/85 mb-10">
            A lot of pain creams make bold claims. Fewer can back them up. TERRAFREEZE
            Canada carries a Natural Product Number — Health Canada's licence confirming
            our formula has been reviewed for safety, quality, and efficacy. Every batch
            is traceable. Every claim is verified.
          </p>
          <div className="mx-auto max-w-md rounded-md bg-background border border-border px-6 py-5 flex items-center justify-center gap-3">
            <BadgeCheck className="h-5 w-5 text-brand" strokeWidth={1.75} />
            <span className="font-serif text-xl text-brand-deep">
              NPN: [INSERT NPN NUMBER]
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Meet Our Collection (colored panel + product image) */}
      <section className="grid md:grid-cols-2 items-stretch">
        <div className="bg-panel text-panel-foreground flex items-center">
          <div className="px-8 md:px-14 py-16 md:py-20 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] mb-5 opacity-70">
              Meet Our Collection
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              TERRAFREEZE Extra Strength
            </h2>
            <p className="text-base md:text-[17px] leading-relaxed mb-8">
              One formula, three ways to stock up. Arthritis, joint inflammation,
              muscle pain, neck and back pain — with emu oil and arnica for enhanced
              relief and healing.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-wider border-b border-current pb-1 hover:opacity-70 transition"
            >
              Shop the Collection →
            </a>
          </div>
        </div>
        <div className="bg-secondary flex items-center justify-center p-10 md:p-16">
          <img
            src={product3pack}
            alt="TERRAFREEZE 3-pack pain relief cream"
            width={800}
            height={800}
            loading="lazy"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </section>

      {/* SECTION 7 — Education */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-4">
            How to Get the Most Out of TERRAFREEZE
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Most people apply pain cream and hope for the best. Here's how to actually use it.
          </p>
          <ol className="space-y-10">
            {tips.map((tip, i) => (
              <li key={tip.title} className="flex gap-5">
                <span className="font-serif text-3xl text-brand leading-none mt-1 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl mb-2">{tip.title}</h3>
                  <p className="text-foreground/85 leading-relaxed">{tip.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 8 — Products */}
      <section id="shop" className="bg-secondary px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-3">
            Try TERRAFREEZE
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            All orders in CAD. Ships from Canada.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-background rounded-md border border-border overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-secondary/50 flex items-center justify-center p-6">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-maple text-maple-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-5">
                    <span className="text-lg font-semibold text-brand-deep">CAD {p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{p.was}</span>
                  </div>
                  <a
                    href={p.href}
                    className="mt-auto inline-flex items-center justify-center rounded-full bg-maple px-5 py-3 text-sm font-semibold text-maple-foreground hover:opacity-90 transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
