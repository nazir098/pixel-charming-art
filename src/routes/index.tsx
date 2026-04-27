import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Clock, BadgeCheck, ArrowRight, CheckCircle2, Star, Phone,
} from "lucide-react";
import { getHomeServicesSync, getPortfolioServicesSync } from "@/lib/api/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BrandStrip } from "@/components/site/BrandStrip";
import { ImageGallery, GalleryItem } from "@/components/site/ImageGallery";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { FAQ } from "@/components/site/FAQ";
import heroTech from "@/assets/hero-technician.jpg";
import { CONTACT, telHref } from "@/lib/contact";
import serverRack from "@/assets/server-rack.jpg";

import gTech from "@/assets/nehru-technician.jpg";
import gLaptops from "@/assets/nehru-laptops.jpg";
import gScreen from "@/assets/nehru-screen.jpg";
import gParts from "@/assets/nehru-parts.jpg";
import gDoorstep from "@/assets/nehru-doorstep.jpg";
import gNetwork from "@/assets/nehru-it-infra.jpg";
import gMobo from "@/assets/nehru-motherboard.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "IT Services Company in Gurgaon — Sector 62, 65, 66, 67 | AMC & Networking | WISHTEK" },
      { name: "description", content: "WISHTEK is a leading IT services company in Gurgaon — networking, servers, AMC, cyber security & managed IT support for businesses in Sector 62, 65, 66, 67 and Golf Course Extension. Office at M3M Urbana, Sector 67." },
      { name: "keywords", content: "IT services Gurgaon, IT company Sector 67 Gurgaon, IT support Sector 65 Gurgaon, IT solutions Sector 66 Gurgaon, AMC services Sector 62 Gurgaon, networking Gurgaon, managed IT Golf Course Extension, IT company M3M Urbana, laptop repair Gurgaon Sector 67" },
      { property: "og:title", content: "IT Services Company in Gurgaon — Sector 62, 65, 66, 67 | WISHTEK" },
      { property: "og:description", content: "Networking, servers, AMC, security & managed IT for businesses in Sector 62, 65, 66, 67 and across Gurgaon. Office at M3M Urbana, Sector 67." },
      { property: "og:url", content: "https://wishtek.tech/" },
      { property: "og:image", content: "https://wishtek.tech/og-image.jpg" },
      { name: "twitter:title", content: "IT Services Company in Gurgaon — Sector 62, 65, 66, 67 | WISHTEK" },
      { name: "twitter:description", content: "Networking, servers, AMC and managed IT for businesses in Sector 62, 65, 66, 67 Gurgaon." },
      { name: "twitter:image", content: "https://wishtek.tech/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://wishtek.tech/" }],
  }),
});

const services = getHomeServicesSync();
const itServicesShowcase = getPortfolioServicesSync().slice(0, 6);

const galleryItems: GalleryItem[] = [
  { src: gTech, alt: "Technician at workbench", title: "Chip-level Repair", category: "Workshop", span: "lg" },
  { src: gMobo, alt: "Motherboard diagnostics", title: "Board Diagnostics", category: "Workshop", span: "tall" },
  { src: gLaptops, alt: "Stack of laptops being repaired", title: "Daily Repairs", category: "Workshop", span: "md" },
  { src: gScreen, alt: "Laptop screen replacement", title: "Screen Replacement", category: "Service", span: "md" },
  { src: gNetwork, alt: "Server cabling on-site", title: "Network Setup", category: "Enterprise", span: "wide" },
  { src: gParts, alt: "Genuine RAM and SSD parts", title: "Genuine Parts", category: "Sourcing", span: "md" },
  { src: gDoorstep, alt: "Wishtek doorstep delivery", title: "Doorstep Service", category: "Delivery", span: "md" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <HeroCarousel
          slides={[
            {
              eyebrow: "IT Services Company · Sector 67, Gurgaon",
              titleStart: "Trusted IT Services in Gurgaon —",
              titleAccent: "Sector 62, 65, 66, 67 & Golf Course Extension",
              description:
                "Headquartered at M3M Urbana, Sector 67 — WISHTEK delivers networking, servers, AMC, cyber security and managed IT support to businesses across Gurgaon's commercial hubs. On-site engineers within 60 minutes for Sector 62-70 clients.",
              primaryCta: { label: "Explore IT Services", to: "/services" },
              secondaryCta: { label: "Get a Free Quote", to: "/inquire" },
              image: serverRack,
              imageAlt: "WISHTEK enterprise IT services for businesses in Sector 67 Gurgaon",
              cardTitle: "Local to Gurgaon",
              cardCaption: "Office at M3M Urbana, Sector 67 — serving Sector 62, 65, 66, 67, 68, 69, 70.",
            },
            {
              eyebrow: "Also Available · Doorstep Laptop Repair",
              titleStart: "Doorstep Laptop Repair —",
              titleAccent: "Free Pickup, Expert Fix, Fast Delivery",
              description:
                "Alongside our enterprise IT services, we also offer doorstep laptop repair across Delhi NCR — genuine parts, certified technicians, transparent pricing and a 90-day warranty.",
              primaryCta: { label: "Book Doorstep Pickup", to: "/book" },
              secondaryCta: { label: "View Repair Pricing", to: "/pricing" },
              image: heroTech,
              imageAlt: "WISHTEK certified technician performing doorstep laptop repair in Gurgaon",
              cardTitle: "90-Day Warranty",
              cardCaption: "Every repair backed by our official service guarantee.",
            },
          ]}
        />
      </section>

      <BrandStrip />

      {/* IT SERVICES SHOWCASE */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Our IT Services
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
                Enterprise IT, <span className="text-gradient">end-to-end</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                From networks and servers to security and AMC — explore the core IT solutions powering 150+ businesses across Delhi NCR.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
              Explore all IT services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {itServicesShowcase.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="h-full"
              >
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: s.id }}
                  aria-label={`View details for ${s.title}`}
                  className="group block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                >
                  <Card className="relative flex h-full flex-col overflow-hidden border-border p-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-elegant">
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary transition-all group-hover:gap-2">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gradient-primary shadow-elegant">
              <Link to="/services">Explore All IT Services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/inquire">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-5xl">Expert Repair Services</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                We specialize in all major brands and models. No issue is too complex for our certified technicians.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to="/book"
                  aria-label={`Book ${s.title}`}
                  className="group block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
                >
                  <Card className="h-full overflow-hidden border-border p-6 transition-base group-hover:border-primary group-hover:-translate-y-1 group-hover:shadow-elegant">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:gradient-primary group-hover:text-primary-foreground">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <p className="mt-4 text-sm font-bold text-primary">Starts at {s.price}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">Why Choose Wishtek?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:row-span-2 rounded-3xl gradient-deep p-8 text-primary-foreground md:p-10 shadow-elegant">
              <Shield className="h-10 w-10 text-accent" />
              <h3 className="mt-6 font-display text-2xl font-extrabold md:text-3xl">Unmatched Local Expertise</h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                Our team consists of industry veterans with over 10+ years of experience in solving complex hardware failures for both consumers and enterprises in Gurugram.
              </p>
            </div>
            <Card className="p-6 hover-lift">
              <Clock className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold">90 Min TAT</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fastest turnaround time in the city for common repairs.</p>
            </Card>
            <Card className="p-6 hover-lift">
              <BadgeCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold">No Fix, No Fee</h3>
              <p className="mt-2 text-sm text-muted-foreground">Transparent policy — you only pay if we solve the problem.</p>
            </Card>
            <Card className="p-6 hover-lift md:col-span-2">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold">100% Genuine Parts</h3>
              <p className="mt-2 text-sm text-muted-foreground">We only use OEM parts or high-quality certified alternatives with full warranties.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img src={serverRack} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 gradient-deep opacity-95" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="relative">
            <div className="absolute right-4 top-4 z-10 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-primary shadow-elegant">
              150+ Active AMC Clients
            </div>
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img src={serverRack} alt="Server room" className="h-80 w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="text-primary-foreground">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">Enterprise IT Solutions</h2>
            <p className="mt-4 text-primary-foreground/80">
              Scaling a business? Let us handle your infrastructure. From AMC contracts to network security and server maintenance — Wishtek is your corporate tech partner.
            </p>
            <ul className="mt-6 space-y-3">
              {["Annual Maintenance Contracts (AMC)", "On-site System Administration", "Data Security & Infrastructure Setup"].map((l) => (
                <li key={l} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> {l}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-accent">
              <Link to="/services">Contact Us for Business</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <ImageGallery
        items={galleryItems}
        title="Straight from the heart of Nehru Place"
        subtitle="Decades of repair expertise sourced from Delhi's largest IT market — now at your doorstep across Gurugram & NCR."
      />

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">Trusted by Thousands</h2>
            <p className="mt-3 text-muted-foreground">Real feedback from our valued customers.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: "My laptop screen was smashed. Wishtek technicians came to my office and replaced it within an hour. Excellent service and very professional behavior.", name: "Rahul Sharma", role: "Marketing Executive" },
              { quote: "Been using their AMC for our startup for 2 years now. Highly reliable team. They respond quickly to any issues we face.", name: "Priya Verma", role: "Founder, TechMark" },
              { quote: "Fair pricing and genuine parts. They explained the issue clearly before fixing it. No hidden charges whatsoever.", name: "Amit Gupta", role: "Freelance Designer" },
            ].map((t, i) => (
              <Card key={i} className="p-7 hover-lift">
                <div className="flex mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                <p className="text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GURGAON SECTORS — HYPERLOCAL */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Hyperlocal · Gurgaon
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
              IT Services Across <span className="text-gradient">Gurgaon Sectors</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Our office at M3M Urbana, Sector 67 means faster on-site response for businesses in nearby commercial sectors. Same-day visits available.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { sector: "Sector 62, Gurgaon", note: "IT support, networking & AMC for offices along Golf Course Extension Road." },
              { sector: "Sector 65, Gurgaon", note: "Managed IT services for SMBs in Emaar Palm Square, Vatika & nearby towers." },
              { sector: "Sector 66, Gurgaon", note: "Server, storage & cyber security setups for businesses near Vatika INXT." },
              { sector: "Sector 67, Gurgaon", note: "Our home base — M3M Urbana. Walk-in support, AMC and rapid on-site visits." },
              { sector: "Sector 68, Gurgaon", note: "Office network design, Wi-Fi and CCTV installations." },
              { sector: "Sector 69 & 70", note: "Annual Maintenance Contracts for residential complexes & startups." },
              { sector: "Golf Course Ext. Road", note: "End-to-end IT infrastructure for premium commercial projects." },
              { sector: "Sohna Road, Gurgaon", note: "Doorstep laptop repair, AMC and managed IT for offices along Sohna Road." },
            ].map((s) => (
              <Card key={s.sector} className="p-5 hover-lift">
                <h3 className="font-display text-base font-bold text-primary">IT Services in {s.sector}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{s.note}</p>
                <Link to="/inquire" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all">
                  Request a quote <ArrowRight className="h-3 w-3" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS — WIDER NCR */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">Doorstep Laptop Repair Service Areas</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Free pickup & delivery across Delhi NCR. Same-day service available in most localities — book before 12 PM.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { city: "Gurgaon", areas: "Sector 62, 65, 66, 67, 68, 69, 70, Golf Course Ext., Sohna Road, DLF, Cyber City" },
              { city: "Delhi", areas: "South Delhi, Saket, Vasant Kunj, Dwarka, Nehru Place, Connaught Place" },
              { city: "Noida", areas: "Sector 1-150, Greater Noida, Noida Extension, Expressway" },
              { city: "Faridabad", areas: "NIT, Sector 1-89, Greater Faridabad, Neharpar" },
              { city: "Ghaziabad", areas: "Indirapuram, Vaishali, Vasundhara, Raj Nagar, Kaushambi" },
            ].map((c) => (
              <Card key={c.city} className="p-5 hover-lift">
                <h3 className="font-display text-lg font-bold text-primary">Laptop Repair in {c.city}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.areas}</p>
                <Link to="/book" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all">
                  Book pickup <ArrowRight className="h-3 w-3" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Laptop Repair & IT Services — FAQs"
        subtitle="Everything you need to know about our doorstep laptop repair and enterprise IT solutions."
        items={[
          { q: "Where is your office located in Gurgaon?", a: "Our office is at Shop no. R1-121, M3M URBANA, Sector 67, Gurugram — easily accessible from Sector 62, 65, 66, 68, 69, 70 and the entire Golf Course Extension Road belt. Walk-ins are welcome during working hours." },
          { q: "Do you provide IT services in Sector 62, 65 and 66 Gurgaon?", a: "Yes. Sector 62, 65 and 66 are some of our most active service zones. Because our base is in Sector 67, on-site engineers typically reach client offices in these sectors within 30-60 minutes for AMC, networking and emergency support calls." },
          { q: "How much does a typical laptop repair cost?", a: "Screen replacement starts at ₹1,499, battery from ₹899, keyboard from ₹1,200, and software/OS install from ₹599. Final pricing depends on your laptop model. We share a transparent quote before any work begins — no hidden charges." },
          { q: "Which laptop brands do you repair?", a: "We service all major brands including Dell, HP, Lenovo, Apple MacBook, Asus, Acer, MSI, Microsoft Surface, Samsung and more — both consumer and business models." },
          { q: "Do you provide a warranty on repairs?", a: "Yes. Every repair carries a 90-day service warranty covering both parts and workmanship. If the same issue recurs within 90 days, we fix it free." },
          { q: "What is included in your enterprise AMC services?", a: "Our Annual Maintenance Contracts cover preventive and breakdown maintenance for laptops, desktops, servers, networking equipment and peripherals — including on-site engineer visits, remote support, asset tracking and quarterly health checks." },
          { q: "How quickly can a technician reach me?", a: "For doorstep pickup in Gurgaon and central Delhi NCR, our agent typically arrives within 60-120 minutes of booking during working hours (10 AM - 8 PM, Mon-Sat)." },
          { q: "Is my data safe during repair?", a: "Absolutely. We follow strict data privacy protocols, never access personal files unless required for the fix, and offer secure data backup before any storage-related repair." },
        ]}
      />

      <section className="gradient-deep py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Ready to get your laptop fixed?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Don't let a technical glitch slow you down. Book a technician today and enjoy hassle-free doorstep service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-accent">
              <Link to="/book">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <a href={telHref}><Phone className="mr-2 h-4 w-4" /> Call {CONTACT.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
