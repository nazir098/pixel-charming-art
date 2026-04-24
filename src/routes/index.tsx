import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar, Wrench, Truck, Monitor, Battery, Keyboard, HardDrive,
  Shield, Clock, BadgeCheck, ArrowRight, CheckCircle2, Star, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BrandStrip } from "@/components/site/BrandStrip";
import { ImageGallery, GalleryItem } from "@/components/site/ImageGallery";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import heroTech from "@/assets/hero-technician.jpg";
import serverRack from "@/assets/server-rack.jpg";

import gTech from "@/assets/nehru-technician.jpg";
import gLaptops from "@/assets/nehru-laptops.jpg";
import gScreen from "@/assets/nehru-screen.jpg";
import gParts from "@/assets/nehru-parts.jpg";
import gDoorstep from "@/assets/nehru-doorstep.jpg";
import gNetwork from "@/assets/nehru-network.jpg";
import gMobo from "@/assets/nehru-motherboard.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "WISHTEK Technology — Doorstep Laptop Repair & Enterprise IT Solutions" },
      { name: "description", content: "Fast, reliable, hassle-free laptop repair across Delhi NCR. Certified technicians, transparent pricing, 90-day warranty. Enterprise IT infrastructure for businesses." },
    ],
  }),
});

const services = [
  { icon: Monitor, title: "Screen Replacement", desc: "Cracked or dead pixels? We replace OEM-grade panels same-day.", price: "₹1,499" },
  { icon: Battery, title: "Battery Service", desc: "Drain issues or swelling? Premium OEM battery replacements available.", price: "₹1,499" },
  { icon: Keyboard, title: "Keyboard Repair", desc: "Sticky keys or non-responsive boards. Full replacements for all layouts.", price: "₹1,200" },
  { icon: HardDrive, title: "Software & OS", desc: "Slow laptop, virus removal, OS install, and data recovery services.", price: "₹599" },
];

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
              eyebrow: "Professional IT Support",
              titleStart: "Doorstep Laptop Repair —",
              titleAccent: "Fast, Reliable & Hassle-Free",
              description:
                "Get your devices fixed by certified experts without leaving your home. Transparent pricing and premium parts guaranteed.",
              primaryCta: { label: "Book Service Now", to: "/book" },
              secondaryCta: { label: "View Pricing", to: "/pricing" },
              image: heroTech,
              imageAlt: "Wishtek certified technician",
              cardTitle: "90-Day Warranty",
              cardCaption: "All repairs come with our official service guarantee for peace of mind.",
            },
            {
              eyebrow: "Corporate Managed Services",
              titleStart: "Comprehensive IT",
              titleAccent: "Solutions for Your Business",
              description:
                "From network infrastructure to cloud backup, we provide scalable IT services tailored for growth.",
              primaryCta: { label: "Explore All Services", to: "/services" },
              secondaryCta: { label: "Contact Sales", to: "/inquire" },
              image: serverRack,
              imageAlt: "Enterprise server room",
              cardTitle: "Secure & Scalable",
              cardCaption: "End-to-end management for modern enterprise requirements.",
            },
          ]}
        />
      </section>

      <BrandStrip />

      {/* HOW IT WORKS */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">How It Works</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full gradient-primary" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-3">
            {[
              { icon: Calendar, step: 1, title: "Book", desc: "Schedule your repair online or call us. Pick a time that suits your schedule." },
              { icon: Wrench, step: 2, title: "Repair", desc: "Our expert technician arrives at your doorstep and fixes the issue on-site." },
              { icon: Truck, step: 3, title: "Deliver", desc: "Final testing is done, and your device is handed back as good as new." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-soft hover-lift"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-glow">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p className="text-sm font-bold text-primary">STEP {s.step}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
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
                <Card className="group h-full overflow-hidden border-border p-6 transition-base hover:border-primary hover-lift">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:gradient-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <p className="mt-4 text-sm font-bold text-primary">Starts at {s.price}</p>
                </Card>
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
              <Link to="/services">Inquire for Business</Link>
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

      {/* CTA */}
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
              <a href="tel:8851930450"><Phone className="mr-2 h-4 w-4" /> Call 8851930450</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
