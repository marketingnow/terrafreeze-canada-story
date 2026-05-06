import { createFileRoute } from "@tanstack/react-router";
import {
  Users, ShieldCheck, MapPin, Hand, Activity, ZapOff, Sun, Star,
} from "lucide-react";

import heroProduct from "@/assets/hero-product.png";

import product2oz from "@/assets/product-2oz.png";
import product3pack from "@/assets/product-3pack.png";
import product6pack from "@/assets/product-6pack.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Story - TERRAFREEZE Canada" },
      {
        name: "description",
        content:
          "A Canadian story. Real relief. Health Canada NPN-registered topical pain relief, custom-developed and manufactured in Canada.",
      },
      { property: "og:title", content: "Our Story - TERRAFREEZE Canada" },
      {
        property: "og:description",
        content: "Health Canada NPN-registered topical pain relief, made for Canadians.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Users,
    title: "Real",
    body:
      "Real Canadians, real pain, real relief. No exaggerated claims, no marketing fluff - just a formula that works and customers who keep coming back.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    body:
      "Health Canada NPN registered and batch-tested every time. Our certifications aren't a marketing badge - they're the standard we hold ourselves to on every production run.",
  },
  {
    icon: MapPin,
    title: "Built for Canada",
    body:
      "Custom-developed formula, Canadian manufactured, formulated for the way Canadians actually live - not a generic product shipped across the border.",
  },
];

const conditions = [
  {
    icon: Hand,
    title: "Arthritis & Joint Pain",
    body:
      "Targeted relief for stiff, swollen, or aching joints - hands, knees, hips, shoulders. Formulated to reduce inflammation and restore comfortable movement.",
    href: "https://terrafreeze.ca/best-pain-relief-cream-arthritis-rheumatoid-arthritis/",
  },
  {
    icon: Activity,
    title: "Back & Muscle Pain",
    body:
      "From a sore lower back to post-workout tightness, fast-absorbing relief that goes where you need it and lasts long enough to actually matter.",
    href: "https://terrafreeze.ca/conditions/best-muscle-pain-relief-cream-canada/",
  },
  {
    icon: ZapOff,
    title: "Nerve & Repetitive Strain",
    body:
      "Sciatica, carpal tunnel, tennis elbow - the persistent pain that most creams can't reach. TERRAFREEZE is formulated to work on nerve-related discomfort.",
    href: "https://terrafreeze.ca/conditions/",
  },
  {
    icon: Sun,
    title: "Everyday Aches",
    body:
      "Pain doesn't need a diagnosis. Yard work, long shifts, an active weekend - TERRAFREEZE is built for the aches that just get in the way of living.",
    href: "https://terrafreeze.ca/conditions/",
  },
];

const tips = [
  {
    title: "Apply to clean, dry skin.",
    body:
      "Freshly washed skin absorbs the active ingredients faster and more evenly. Avoid applying over lotion or other topicals.",
  },
  {
    title: "Massage in for 30–60 seconds.",
    body:
      "Don't just dab it on. Working the cream in with circular pressure helps the actives penetrate deeper - which is where the relief actually comes from.",
  },
  {
    title: "Use it consistently for chronic pain.",
    body:
      "One application helps. Daily use builds on that. For arthritis and nerve pain especially, consistency matters far more than how much you apply at once.",
  },
];

const testimonials = [
  {
    quote:
      "My arthritis was unbearable and I'd tried everything. A friend recommended TERRAFREEZE and I haven't looked back. It's the first thing I reach for every morning.",
    name: "Margaret R.",
    city: "Edmonton, AB",
  },
  {
    quote:
      "As a physiotherapist in Vancouver I've tried every topical on the market. TERRAFREEZE is the one I recommend for repetitive strain and nerve pain. The results are consistent.",
    name: "David K., PT",
    city: "Vancouver, BC",
  },
  {
    quote:
      "The NPN registration made me feel safe trying it. Within minutes of applying I felt the difference. Nothing else has worked like this for my back.",
    name: "Sophie L.",
    city: "Montréal, QC",
  },
];

const products = [
  {
    img: product2oz, name: "Single 2oz", price: "$24.99", was: "$44.99", badge: null,
    href: "https://terrafreeze.ca/product/terrafreeze-pain-relief-cream-1-package-2oz/",
  },
  {
    img: product3pack, name: "3-Pack 6oz", price: "$39.97", was: "$89.99", badge: "Best Value",
    href: "https://terrafreeze.ca/shop/",
  },
  {
    img: product6pack, name: "6-Pack 12oz", price: "$69.97", was: "$149.99", badge: null,
    href: "https://terrafreeze.ca/product/terrafreeze-pain-relief-cream-6-package/",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 2/3 - Split hero: image left, colored panel right */}
      <section id="story" className="grid md:grid-cols-2 md:items-end">
        <div className="bg-secondary flex items-end justify-center">
          <img
            src={heroProduct}
            alt="TERRAFREEZE Extra Strength Pain Relief Cream with natural ingredients"
            width={800}
            height={800}
            className="w-full h-auto max-h-[560px] object-contain object-bottom"
          />
        </div>
        <div className="bg-brand text-white flex items-end self-stretch">
          <div className="px-8 md:px-14 py-16 md:py-20 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] mb-5 opacity-80">
              A Canadian Story · Real Relief
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
              Hi, We're TERRAFREEZE Canada.
            </h1>
            <div className="space-y-4 text-base md:text-[17px] leading-relaxed text-white/90">
              <p>
                We started with a simple belief: Canadians dealing with muscle and joint pain
                deserve a topical relief cream that was actually built for them - not an
                afterthought import, but a formula custom-developed, Canadian manufactured,
                and held to Health Canada's standards from day one.
              </p>
              <p>
                What began in 2015 as a mission to create superior pain relief has grown into
                a trusted name serving customers across the country. Over nearly a decade,
                we've continuously refined our formulation, conducted extensive research, and
                built a reputation for delivering reliable, effective relief when you need it most.
              </p>
              <p>
                We adapted the formula for this market, earned our NPN registration with Health
                Canada, and set up manufacturing here. Because if you're going to put something
                on your body every day, it should meet the highest standard available - and in
                Canada, that means Health Canada approval.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4 - 3 Brand Pillars */}
      <section className="px-5 py-20 md:py-24 bg-card">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-foreground/75 text-lg md:text-xl mb-14 max-w-3xl mx-auto font-serif italic">
            Honest formulas. Transparent labels. We're dedicated to keeping you in the know.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background rounded-md border border-border p-8">
                <p.icon className="h-8 w-8 text-brand mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{p.title}</h3>
                <p className="text-foreground/85 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner strip */}
      <section className="bg-brand text-white px-5 py-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <h3 className="font-serif text-xl md:text-2xl shrink-0 md:max-w-[180px] leading-tight" style={{ color: "white" }}>
            A Cream You Can Trust
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-3 flex-1 text-center">
            {[
              { icon: ShieldCheck, label: "Health Canada NPN" },
              { icon: ShieldCheck, label: "Batch Tested" },
              { icon: ShieldCheck, label: "Physician Approved" },
              { icon: ShieldCheck, label: "Custom Formula" },
              { icon: MapPin, label: "Made in Canada" },
              { icon: ShieldCheck, label: "GMP Certified" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-1.5">
                <f.icon className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] opacity-90 leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-8">Beyond Temporary Relief</h2>
          <div className="space-y-5 text-left text-base md:text-[17px] leading-relaxed text-foreground/90">
            <p>
              Our mission is to provide effective, reliable topical pain relief that restores
              comfort, enhances mobility, and improves daily quality of life. We want to be more
              than another product on your shelf - we want to be the solution you actually reach for.
            </p>
            <p>
              From our early days, we recognized that traditional pain relief options often fell
              short of providing the targeted, long-lasting relief people truly needed. That gap
              is exactly what TERRAFREEZE was built to fill. Every refinement we've made over the
              past decade has been driven by one question: does this work better for the person using it?
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Health Canada & GMP */}
      <section className="bg-brand text-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] mb-5 opacity-80">
            Certified. Tested. Accountable.
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-10 leading-tight">
            GMP Certified. Health Canada Licensed. Every Batch Tested.
          </h2>
          <div className="space-y-5 text-left text-base md:text-[17px] leading-relaxed text-white/90">
            <p>
              This is where we put our money where our mouth is. TERRAFREEZE operates under a
              Health Canada Establishment Licence and is manufactured in a GMP (Good Manufacturing
              Practice) certified facility. That means our production meets Canada's federal
              standards for safety, quality, and consistency - the same standards applied to
              pharmaceutical manufacturers.
            </p>
            <p>
              Every batch goes through stability, purity, potency, and safety testing before it
              ships. Not as a checkbox. Because it's the right way to make something people put
              on their body every day.
            </p>
            <p>
              Most topical pain creams you'll find online carry none of these certifications.
              We think that matters. And so do the hundreds of thousands of Canadians who've made
              TERRAFREEZE part of their routine.
            </p>
          </div>
          <p className="mt-10 text-sm text-white/75 max-w-xl mx-auto">
            Unlike many uncertified products in the market, every TERRAFREEZE product is
            traceable, tested, and approved before it reaches you.
          </p>
        </div>
      </section>

      {/* SECTION 7 - What TERRAFREEZE Helps With */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-14">
            What TERRAFREEZE Helps With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((c) => (
              <div key={c.title} className="bg-card rounded-md border border-border p-7 flex flex-col">
                <c.icon className="h-7 w-7 text-brand mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight">{c.title}</h3>
                <p className="text-foreground/85 leading-relaxed text-[15px] mb-5">{c.body}</p>
                <a
                  href={c.href}
                  className="mt-auto text-sm font-semibold text-brand hover:underline"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Education */}
      <section className="bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-4">
            How to Get the Most Out of TERRAFREEZE
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-14">
            Most people apply pain cream and hope for the best. Here's how to actually use it.
          </p>
          <ol className="space-y-10">
            {tips.map((tip, i) => (
              <li key={tip.title} className="flex gap-5">
                <span className="font-serif text-3xl md:text-4xl text-amber-cta leading-none mt-1 w-12 shrink-0">
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

      {/* SECTION 9 - Testimonials */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            From Our Customers
          </p>
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-14">
            Canadians Who Found Relief
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card rounded-md border border-border p-7 flex flex-col">
                <blockquote className="text-left text-foreground/90 leading-relaxed text-[15px] mb-6">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{t.city}</p>
                  <div className="flex gap-0.5 text-amber-cta" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Products */}
      <section id="shop" className="bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            The Cream Behind the Story
          </p>
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-3">
            Try TERRAFREEZE
          </h2>
          <p className="text-center text-muted-foreground mb-14">
            All orders in CAD. Ships from Canada. No cross-border delays.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-background rounded-md border border-border overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square bg-secondary/40 flex items-center justify-center p-6">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-amber-cta text-amber-cta-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-5">
                    <span className="text-lg font-semibold text-brand">CAD {p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{p.was}</span>
                  </div>
                  <a
                    href={p.href}
                    className="mt-auto inline-flex items-center justify-center bg-amber-cta px-5 py-3 text-sm font-semibold text-amber-cta-foreground hover:opacity-90 transition"
                    style={{ borderRadius: "10px" }}
                  >
                    ADD TO CART
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
