import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Facebook,
  Gift,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wheat,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/raj-sweets-hero.jpg";
import mithaiImage from "@/assets/raj-sweets-mithai.jpg";
import namkeenImage from "@/assets/raj-sweets-namkeen.jpg";
import giftImage from "@/assets/raj-sweets-gift-box.jpg";

const phone = "919826234444";
const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("Namaste Raj Sweets! I would like to place an order.")}`;

const products = [
  { name: "Kaju Katli", note: "Silver leaf · pure cashew", image: mithaiImage, position: "object-left-top" },
  { name: "Gulab Jamun", note: "Soft, warm & syrupy", image: mithaiImage, position: "object-right-top" },
  { name: "Motichoor Laddu", note: "Festive favourite", image: mithaiImage, position: "object-left-bottom" },
  { name: "Samosa & Kachori", note: "Crisp evening snacks", image: namkeenImage, position: "object-center" },
];

const reviews = [
  { text: "The kaju katli is the best in Nagda. We order for every Diwali and the quality is always excellent.", name: "Priya Sharma", place: "Nagda" },
  { text: "We ordered gift boxes for our daughter's wedding. Fresh, beautifully packed and delivered on time.", name: "Rakesh Verma", place: "Ujjain" },
  { text: "Their gulab jamun tastes wonderfully traditional. You can tell they use good ingredients.", name: "Anita Joshi", place: "Bus Stand Area" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Sweets Nagda | Mithai, Namkeen & Gift Boxes" },
      { name: "description", content: "Visit Raj Sweets in Nagda for fresh pure ghee mithai, namkeen, wedding orders and festive gift boxes. Open daily, 8 AM to 10 PM." },
      { property: "og:title", content: "Raj Sweets — Authentic Mithai in Nagda" },
      { property: "og:description", content: "Pure ghee sweets, fresh namkeen and festive gift boxes, made daily in Nagda." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: "Raj Sweets",
        telephone: "+91 98262 34444",
        address: { "@type": "PostalAddress", streetAddress: "12, Mahatma Gandhi Road, Near Bus Stand", addressLocality: "Nagda", addressRegion: "Madhya Pradesh", postalCode: "456335", addressCountry: "IN" },
        openingHours: "Mo-Su 08:00-22:00",
      }),
    }],
  }),
  component: RajSweetsPage,
});

function RajSweetsPage() {
  const [sent, setSent] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const enquiry = String(form.get("enquiry") ?? "").trim();
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(`Namaste Raj Sweets! I am ${name}. ${enquiry}`)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <main className="overflow-hidden bg-cream text-ink">
      <section className="relative overflow-hidden bg-vermilion text-cream">
        <div aria-hidden="true" className="animate-spin-slow absolute -right-20 -top-20 size-72 rounded-full border-[44px] border-gold/20" />
        <div aria-hidden="true" className="absolute right-8 top-28 size-24 rounded-full border-2 border-dashed border-gold/50" />
        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-5 sm:px-8 lg:px-12 lg:pb-16 lg:pt-8">
          <header className="flex items-center justify-between">
            <a href="#top" id="top" className="flex items-baseline gap-2" aria-label="Raj Sweets home">
              <span className="font-display text-3xl leading-none">RAJ</span>
              <span className="font-display text-3xl leading-none text-gold">SWEETS</span>
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/75">Nagda · 456335</span>
          </header>

          <div className="mt-8 grid items-end gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="lg:pb-8">
              <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.25em] text-gold">Since 1999 · Pure Ghee</p>
              <h1 className="animate-rise mt-3 max-w-2xl font-display text-[clamp(4rem,14vw,7.5rem)] leading-[0.88] text-balance [animation-delay:80ms]">Authentic Desi Mithai</h1>
              <p className="animate-rise mt-3 font-display text-[clamp(1.8rem,6vw,3.5rem)] leading-none text-gold [animation-delay:160ms]">Fresh Every Day</p>
              <p className="animate-rise mt-5 max-w-lg text-sm leading-6 text-cream/85 sm:text-base [animation-delay:220ms]">Nagda’s trusted counter for pure ghee sweets, savoury namkeen and festive gift boxes for over 25 years.</p>
              <Button asChild variant="gold" size="pill" className="animate-rise mt-6 w-full font-display text-lg sm:w-auto [animation-delay:280ms]">
                <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> Order on WhatsApp</a>
              </Button>
            </div>
            <figure className="animate-rise relative aspect-[4/3] overflow-hidden rounded-[28px] border border-gold/30 [animation-delay:180ms]">
              <img src={heroImage} alt="Assorted Raj Sweets mithai in a festive brass box" width={1280} height={960} fetchPriority="high" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream backdrop-blur">Made fresh in Nagda</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <nav aria-label="Main navigation" className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 lg:px-12">
          <Button asChild variant="ink" size="sm" className="rounded-full"><a href="tel:+919826234444"><Phone /> <span className="hidden sm:inline">Call Now</span></a></Button>
          <div className="flex gap-4 text-sm font-semibold text-ink-soft sm:gap-8">
            <a href="#menu" className="transition-colors hover:text-vermilion">Menu</a>
            <a href="#story" className="transition-colors hover:text-vermilion">Story</a>
            <a href="#visit" className="transition-colors hover:text-vermilion">Visit</a>
          </div>
          <Button asChild size="sm" className="rounded-full"><a href={whatsappUrl} target="_blank" rel="noreferrer">Order</a></Button>
        </div>
      </nav>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading eyebrow="Mithai · Namkeen · Gifting" title="The Counter" />
        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="aspect-square overflow-hidden rounded-[20px] bg-cream-2">
                <img src={product.image} alt={product.name} width={1024} height={1024} loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${product.position}`} />
              </div>
              <h3 className="mt-3 font-display text-xl sm:text-2xl">{product.name}</h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-soft sm:text-xs">{product.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Rasgulla", "Milk Cake", "Dhokla", "Namkeen", "Gift Boxes"].map((item) => <span key={item} className="rounded-full border border-line bg-cream-2 px-4 py-2 text-sm font-semibold">{item}</span>)}
        </div>
        <Button asChild size="pill" className="mt-7 w-full font-display text-lg sm:w-auto"><a href={whatsappUrl} target="_blank" rel="noreferrer">Order a Box <ArrowRight /></a></Button>
      </section>

      <section id="story" className="bg-vermilion text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">Our Story</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-[0.95] text-balance sm:text-6xl">25 years of pure ghee, one family, one Nagda counter.</h2>
          </div>
          <div className="lg:self-end">
            <p className="max-w-xl leading-7 text-cream/85">From our first morning batch to today’s festive gift boxes, Raj Sweets has served Nagda with the same promise: traditional recipes, dependable quality and a fresh counter every day.</p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {[{ value: "25+", label: "Years" }, { value: "100%", label: "Pure Ghee" }, { value: "Daily", label: "Fresh Batch" }].map((stat) => (
                <div key={stat.label} className="rounded-[18px] border border-cream/15 bg-cream/10 p-3 sm:p-5"><p className="font-display text-2xl text-gold sm:text-4xl">{stat.value}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-cream/70 sm:text-[10px]">{stat.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading eyebrow="Crafted for every occasion" title="Why Nagda Chooses Us" />
        <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {[{ icon: Wheat, title: "Pure ingredients", text: "Quality dry fruits, dairy and pure ghee selected for taste." }, { icon: Sparkles, title: "Fresh daily", text: "Small, fresh batches made for the day’s counter." }, { icon: Gift, title: "Festive gifting", text: "Beautiful boxes for Diwali, weddings and family occasions." }, { icon: ShieldCheck, title: "25 years of trust", text: "A familiar local name serving generations of Nagda families." }].map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-t-2 border-gold pt-5"><Icon className="size-6 text-vermilion" aria-hidden="true" /><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p></article>
          ))}
        </div>
      </section>

      <section className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <SectionHeading eyebrow="@rajsweetsnagda" title="From Our Counter" />
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 lg:gap-5">
            <GalleryImage src={giftImage} alt="Festive Raj Sweets gift box" className="row-span-2 aspect-[3/4] sm:aspect-auto" width={832} height={1216} />
            <GalleryImage src={mithaiImage} alt="Kaju katli and gulab jamun" className="aspect-square" width={1024} height={1024} />
            <GalleryImage src={namkeenImage} alt="Fresh samosa, kachori and dhokla" className="aspect-square" width={1024} height={1024} />
            <GalleryImage src={heroImage} alt="Traditional assorted Indian sweets" className="col-span-2 aspect-[2/1]" width={1280} height={960} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading eyebrow="Loved locally" title="Nagda Loves Us" />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="rounded-[20px] border border-line bg-cream-2 p-5">
              <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
              <blockquote className="mt-4 text-sm leading-6">“{review.text}”</blockquote>
              <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-soft">— {review.name}, {review.place}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-soft">Demo testimonials shown for layout preview.</p>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">Helpful details</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Good to Know</h2></div>
          <Accordion type="single" collapsible className="border-t border-cream/20">
            {[{ q: "Do you take bulk and wedding orders?", a: "Yes. Call or WhatsApp us in advance to discuss quantity, assortment and gift-box presentation." }, { q: "Is the mithai made fresh every day?", a: "Yes. We prepare fresh batches daily and keep our counter replenished throughout business hours." }, { q: "Can I order festive gift boxes?", a: "Yes. Assorted boxes can be prepared for Diwali, weddings, corporate gifting and family celebrations." }, { q: "Do you deliver?", a: "Please call or WhatsApp with your location and order size. We will confirm current delivery availability." }].map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-cream/20"><AccordionTrigger className="py-5 text-base text-cream hover:text-gold hover:no-underline">{item.q}</AccordionTrigger><AccordionContent className="max-w-xl leading-6 text-cream/70">{item.a}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="visit" className="bg-vermilion text-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <SectionHeading eyebrow="Visit us" title="Find the Counter" light />
          <div className="mt-7 grid overflow-hidden rounded-[24px] bg-cream text-ink lg:grid-cols-2">
            <iframe title="Map showing Raj Sweets near Nagda Bus Stand" src="https://www.google.com/maps?q=12%20Mahatma%20Gandhi%20Road%20Near%20Bus%20Stand%20Nagda%20Madhya%20Pradesh%20456335&output=embed" className="h-80 w-full border-0 lg:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="space-y-4 text-sm">
                <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-vermilion" />12, Mahatma Gandhi Road, Near Bus Stand, Nagda, Ujjain, Madhya Pradesh – 456335</p>
                <p className="flex gap-3"><Clock3 className="size-5 shrink-0 text-vermilion" />Open daily · 8:00 AM – 10:00 PM</p>
                <p className="flex gap-3"><Phone className="size-5 shrink-0 text-vermilion" /><a href="tel:+919826234444" className="font-semibold hover:underline">+91 98262 34444</a></p>
              </div>
              <form onSubmit={submitEnquiry} className="mt-8 space-y-4">
                <div><Label htmlFor="name">Your name</Label><Input id="name" name="name" required className="mt-2 h-12 rounded-full bg-cream-2 px-4" placeholder="Enter your name" /></div>
                <div><Label htmlFor="enquiry">What would you like?</Label><Textarea id="enquiry" name="enquiry" required className="mt-2 min-h-28 rounded-2xl bg-cream-2 px-4 py-3" placeholder="Tell us about your order or event" /></div>
                <Button type="submit" size="pill" className="w-full font-display text-lg">Send on WhatsApp <MessageCircle /></Button>
                {sent && <p className="flex items-center gap-2 text-sm text-ink-soft" role="status"><Check className="size-4 text-vermilion" /> WhatsApp opened with your enquiry.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-cream/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div><div className="flex gap-2 font-display text-3xl"><span className="text-cream">RAJ</span><span className="text-gold">SWEETS</span></div><p className="mt-2 max-w-md text-sm">Authentic Desi Mithai & Namkeen, Fresh Every Day.</p></div>
          <div className="space-y-3 font-mono text-xs"><p>Nagda, Ujjain, Madhya Pradesh</p><div className="flex gap-4"><a href="https://instagram.com/rajsweetsnagda" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><Instagram className="size-4" /> Instagram</a><a href="https://facebook.com/rajsweetsnagda" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold"><Facebook className="size-4" /> Facebook</a></div></div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <Button asChild variant="ink" size="round" className="animate-bob shadow-xl" title="Call Raj Sweets"><a href="tel:+919826234444" aria-label="Call Raj Sweets"><Phone className="size-5" /></a></Button>
        <Button asChild variant="gold" size="round" className="animate-bob shadow-xl [animation-delay:150ms]" title="WhatsApp Raj Sweets"><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Raj Sweets"><MessageCircle className="size-5" /></a></Button>
      </div>
    </main>
  );
}

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><h2 className={`font-display text-4xl sm:text-6xl ${light ? "text-cream" : "text-ink"}`}>{title}</h2><p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-gold" : "text-ink-soft"}`}>{eyebrow}</p></div>;
}

function GalleryImage({ src, alt, className, width, height }: { src: string; alt: string; className: string; width: number; height: number }) {
  return <figure className={`group overflow-hidden rounded-[20px] bg-cream ${className}`}><img src={src} alt={alt} width={width} height={height} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></figure>;
}