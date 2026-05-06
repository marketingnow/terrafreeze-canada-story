import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Heart,
  Hand,
  Activity,
  ZapOff,
  User,
  BadgeCheck,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import lifestyle from "@/assets/lifestyle-hike.jpg";
import product2oz from "@/assets/product-2oz.jpg";
import product3pack from "@/assets/product-3pack.jpg";
import product6pack from "@/assets/product-6pack.jpg";

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
        content:
          "Health Canada NPN-registered topical pain relief, made for Canadians.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Zap,
    title: "Fast-Acting",
    body: "Our formula gets to work in minutes — so you spend less time waiting and more time moving.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    body: "Health Canada NPN registered. Every batch tested. Nothing on that label we can't stand behind.",
  },
  {
    icon: Heart,
    title: "Made for You",
    body: "Not a generic formula shipped across the border. Custom-developed for the Canadian market and the people in it.",
  },
];

const tiles = [
  {
    icon: Hand,
    title: "Arthritis & Joint Pain",
    body: "Targeted relief for stiff, swollen, or aching joints — hands, knees, hips, shoulders.",
    href: "https://terrafreeze.ca/best-pain-relief-cream-arthritis-rheumatoid-arthritis/",
  },
  {
    icon: Activity,
    title: "Back & Muscle Pain",
    body: "From a sore lower back to post-workout tightness — fast-absorbing relief where you need it.",
    href: "https://terrafreeze.ca/conditions/best-muscle-pain-relief-cream-canada/",
  },
  {
    icon: ZapOff,
    title: "Nerve & Repetitive Strain",
    body: "Sciatica, carpal tunnel, tennis elbow — the pain that standard creams can't touch.",
    href: "https://terrafreeze.ca/conditions/",
  },
  {
    icon: User,
    title: "Everyday Aches",
    body: "Yard work, long shifts, a hard workout — pain doesn't pick a season or a reason.",
    href: "https://terrafreeze.ca/conditions/",
  },
];

const tips = [
  {
    title: "Apply to clean, dry skin.",
    body: "Freshly washed skin absorbs the active ingredients faster and more evenly. Avoid applying over lotion or other topicals.",
  },
  {
    title: "Massage it in for 30–60 seconds.",
    body: "Don't just dab it on. Working the cream in with circular pressure helps the actives penetrate deeper, which is where the relief actually comes from.",
  },
  {
    title: "Use it consistently for chronic pain.",
    body: "One application helps. Daily use builds on that relief. For arthritis and nerve pain especially, consistency matters far more than how much you apply at once.",
  },
];

const products = [
  {
    img: product2oz,
    name: "Single 2oz",
    price: "$24.99",
    was: "$44.99",
    badge: null,
    href: "https://terrafreeze.ca/product/terrafreeze-pain-relief-cream-1-package-2oz/",
  },
  {
    img: product3pack,
    name: "3-Pack 6oz",
    price: "$39.97",
    was: "$89.99",
    badge: "Best Value",
    href: "https://terrafreeze.ca/shop/",
  },
  {
    img: product6pack,
    name: "6-Pack 12oz",
    price: "$69.97",
    was: "$149.99",
    badge: null,
    href: "https://terrafreeze.ca/product/terrafreeze-pain-relief-cream-6-package/",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* SECTION 2 — Banner */}
      <section className="px-5 pt-20 md:pt-28 pb-12">
        <h1 className="text-center mx-auto max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
          Real Relief for Real Canadians.
        </h1>
      </section>

      {/* SECTION 3 — Hi, We're TERRAFREEZE */}
      <section id="story" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-10">
            Hi, We're TERRAFREEZE Canada
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              We started with a simple belief: Canadians dealing with muscle and joint pain
              deserve a topical relief cream that was actually built for them — not an
              afterthought import, but a formula custom-developed, Canadian manufactured,
              and held to Health Canada's standards from day one.
            </p>
            <p>
              When it became clear the original TERRAFREEZE formula needed its own Canadian
              chapter, we didn't cut corners. We adapted the formula for this market,
              earned our NPN registration with Health Canada, and set up manufacturing here.
              Because if you're going to put something on your body every day, it should
              meet the highest standard available — and in Canada, that means Health Canada
              approval.
            </p>
            <p>
              Today, hundreds of thousands of Canadians reach for TERRAFREEZE for arthritis,
              back pain, muscle soreness, nerve pain, and the everyday aches that get in
              the way of living. We're proud of that trust. And we work every day to
              deserve it.
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle image divider */}
      <section className="px-5">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl">
          <img
            src={lifestyle}
            alt="Active Canadians enjoying the outdoors"
            width={1280}
            height={832}
            loading="lazy"
            className="w-full h-[280px] md:h-[440px] object-cover"
          />
        </div>
      </section>

      {/* SECTION 4 — Pillars */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            What we stand for
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-10 mt-12">
            {pillars.map((p) => (
              <div key={p.title}>
                <p.icon className="h-7 w-7 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — NPN */}
      <section className="px-5 py-16 md:py-24 bg-secondary/60 border-y border-border">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-8">
            What NPN Registration Actually Means
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90 mb-10">
            A lot of pain creams make bold claims. Fewer can back them up. TERRAFREEZE
            Canada carries a Natural Product Number (NPN) — Health Canada's licence that
            confirms our formula has been reviewed for safety, quality, and efficacy. It
            means we're accountable to a federal standard. It means every batch is
            traceable. It means when you read our label, it's been verified.
          </p>
          <div className="mx-auto max-w-md rounded-xl bg-card border border-border px-6 py-5 flex items-center justify-center gap-3">
            <BadgeCheck className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <span className="font-serif text-xl tracking-wide text-primary">
              NPN: [INSERT NPN NUMBER]
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Use cases */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-14">
            What TERRAFREEZE Helps With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiles.map((t) => (
              <div
                key={t.title}
                className="bg-card rounded-2xl p-7 border border-border/70 flex flex-col"
              >
                <t.icon className="h-7 w-7 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl mb-3">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{t.body}</p>
                <a
                  href={t.href}
                  className="mt-5 text-sm font-semibold text-amber hover:underline"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Education */}
      <section className="px-5 py-20 md:py-28 bg-secondary/60 border-y border-border">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-5">
            How to Get the Most Out of TERRAFREEZE
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Most people apply pain cream and hope for the best. Here's how to actually use it.
          </p>
          <ol className="space-y-10">
            {tips.map((tip, i) => (
              <li key={tip.title} className="flex gap-5">
                <span className="font-serif text-3xl text-primary/70 leading-none mt-1 w-8 shrink-0">
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
      <section className="px-5 py-20 md:py-28">
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
                className="bg-card rounded-2xl border border-border/70 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-secondary/40">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-amber text-amber-foreground text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-xl font-semibold text-primary">CAD {p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {p.was}
                    </span>
                  </div>
                  <a
                    href={p.href}
                    className="mt-auto inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-semibold text-amber-foreground hover:opacity-90 transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
