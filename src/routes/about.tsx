import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Store, Zap, PiggyBank, BadgeCheck, Headphones, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BrandStrip } from "@/components/site/BrandStrip";
import { ImageGallery, GalleryItem } from "@/components/site/ImageGallery";
import teamImg from "@/assets/team-workshop.jpg";
import gRepair from "@/assets/repair-closeup.jpg";
import gScreen from "@/assets/gallery-screen.jpg";
import gBattery from "@/assets/gallery-battery.jpg";
import gKeyboard from "@/assets/gallery-keyboard.jpg";
import gNetwork from "@/assets/nehru-it-infra.jpg";
import gSsd from "@/assets/gallery-ssd.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About WISHTEK Technology — Doorstep Laptop Repair Experts in Delhi NCR" },
      { name: "description", content: "10+ years of experience, 50,000+ laptop repairs completed. Nehru Place-rooted technicians serving Gurgaon, Delhi, Noida, Faridabad & Ghaziabad." },
      { property: "og:title", content: "About WISHTEK Technology — Trusted IT Partner in Delhi NCR" },
      { property: "og:description", content: "Born in Nehru Place. Serving Delhi NCR with doorstep laptop repair and enterprise IT solutions." },
      { property: "og:url", content: "https://wishtek.tech/about" },
      { name: "twitter:title", content: "About WISHTEK Technology" },
      { name: "twitter:description", content: "Trusted IT partner across Delhi NCR." },
    ],
    links: [{ rel: "canonical", href: "https://wishtek.tech/about" }],
  }),
});

const stats = [
  { v: "10+", l: "Years Experience" },
  { v: "50k+", l: "Repairs Completed" },
  { v: "10+", l: "Team Experts" },
  { v: "100%", l: "Local Trust" },
];

const features = [
  { icon: Store, title: "Nehru Place Heritage", desc: "Born in the heart of Asia's largest IT hub, we bring deep technical expertise and component-level knowledge that only Nehru Place veterans possess. We know every laptop architecture from the inside out.", featured: false, big: true },
  { icon: Zap, title: "Rapid On-site Support", desc: "No more carrying heavy laptops to service centers. Our experts come to you across Delhi NCR.", featured: true },
  { icon: PiggyBank, title: "Cost-Effective Pricing", desc: "We believe high-quality IT support shouldn't break the bank. Transparent pricing with no hidden service fees." },
  { icon: BadgeCheck, title: "Genuine Components", desc: "Only authentic spares. We value your device's longevity as much as you do." },
  { icon: Headphones, title: "Post-Repair Support", desc: "Our relationship doesn't end with a repair. We offer industry-leading warranties on all services." },
];

const galleryItems: GalleryItem[] = [
  { src: teamImg, alt: "Wishtek team", title: "Our Team", category: "Culture", span: "lg" },
  { src: gRepair, alt: "Component repair", title: "Precision Work", category: "Workshop", span: "md" },
  { src: gScreen, alt: "Screen repair", title: "Screen Service", category: "Service", span: "tall" },
  { src: gBattery, alt: "Battery repair", title: "Battery", category: "Service", span: "md" },
  { src: gNetwork, alt: "Network", title: "Network Setup", category: "Field", span: "md" },
  { src: gKeyboard, alt: "Keyboard", title: "Keyboard Repair", category: "Service", span: "wide" },
  { src: gSsd, alt: "SSD upgrade", title: "Storage Upgrade", category: "Upgrade", span: "md" },
  { alt: "More coming", span: "md" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="gradient-hero py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              India's Trusted Tech Partner
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Redefining Tech Support for{" "}
              <span className="text-gradient">India's Digital Pulse</span>
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
              We are a dedicated team of 10 experts from the heart of the Nehru Place laptop market, working throughout the Delhi NCR region to provide cost-effective, high-quality on-site repairs since long time. WISHTEK TECHNOLOGY brings world-class IT standards directly to your doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary shadow-elegant">
                <Link to="/inquire">Inquire Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={teamImg} alt="WISHTEK team in workshop" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-accent/40 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary md:text-5xl">{s.v}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Why WISHTEK TECHNOLOGY?</h2>
          <div className="mt-3 h-1 w-16 rounded-full gradient-primary" />

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:auto-rows-fr">
            {features.map((f, i) => (
              <Card
                key={i}
                className={`p-7 hover-lift ${f.big ? "md:col-span-2" : ""} ${f.featured ? "bg-accent/60 border-primary/20" : ""}`}
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${f.featured ? "gradient-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
                {f.featured && (
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    View Coverage areas <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-deep py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Our Mission</h2>
          <p className="mt-5 max-w-3xl text-primary-foreground/80 md:text-lg">
            At WISHTEK TECHNOLOGY, our mission is to democratize high-end IT support. We strive to empower the digital pulse of India — from the individual student in South Delhi to the scaling startup in Gurgaon — by providing reliable, affordable, and professional laptop repair services that respect the user's time and resources.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { t: "Professionalism First", d: "Adhering to world-class IT standards in every single nut we tighten." },
              { t: "Local Empathy", d: "Understanding the specific hardware and software needs of the Indian market." },
            ].map((b) => (
              <div key={b.t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-bold">{b.t}</p>
                  <p className="mt-1 text-sm text-primary-foreground/75">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageGallery items={galleryItems} title="Inside Wishtek" subtitle="Glimpses from our workshop, field deployments, and team in action." />

      <BrandStrip label="Expertise across all major brands" />
    </SiteLayout>
  );
}
