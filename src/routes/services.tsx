import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Monitor, Server, CloudUpload, Layers, Network, Shield, ClipboardCheck,
  Smartphone, Video, Zap, Code2, Award, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import enterpriseHero from "@/assets/enterprise-hero.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Enterprise IT Solutions — WISHTEK Technology" },
      { name: "description", content: "End-to-end IT services for the modern enterprise: compute, networking, security, AMC, asset management, AV solutions and more." },
    ],
  }),
});

const portfolio = [
  { icon: Monitor, title: "Compute Solutions", desc: "Scalable processing power including workstations and VDI environments tailored for heavy enterprise workloads." },
  { icon: Server, title: "Server", desc: "High-availability server deployments, configuration, and management for mission-critical applications." },
  { icon: CloudUpload, title: "Storage & Backup", desc: "Robust data protection strategies and high-speed storage architectures to ensure business continuity." },
  { icon: Layers, title: "Hyper Converged Infrastructure", desc: "Streamlined IT operations by combining compute, storage, and networking into a single agile system." },
  { icon: Network, title: "Networking Solutions", desc: "Enterprise-grade wired and wireless networking designed for seamless connectivity and low latency." },
  { icon: Shield, title: "Security Solutions", desc: "Comprehensive cybersecurity frameworks, firewalls, and endpoint protection to safeguard your digital assets." },
  { icon: ClipboardCheck, title: "Asset Management", desc: "Lifecycle tracking and optimization of your IT hardware and software assets to maximize ROI." },
  { icon: Smartphone, title: "Mobility Solutions", desc: "Secure mobile device management and remote access solutions for a modern, hybrid workforce." },
  { icon: Video, title: "Audio Video Solutions", desc: "Integrated AV systems for conference rooms, digital signage, and immersive collaborative spaces." },
  { icon: Zap, title: "Low Voltage Solutions", desc: "Structured cabling, surveillance, and access control systems for physical building infrastructure." },
  { icon: Code2, title: "Software Solutions", desc: "License management and custom software implementations to drive operational productivity." },
  { icon: Award, title: "AMC / Annual Maintenance", desc: "Proactive maintenance contracts ensuring your hardware operates at peak efficiency year-round." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="gradient-hero py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Enterprise Solutions
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold md:text-6xl">
              Enterprise IT <span className="text-gradient">Solutions</span>
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
              Empowering your business with scalable, reliable, and high-performance infrastructure. We provide end-to-end technology services designed for the modern enterprise landscape.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary shadow-elegant">
                <Link to="/inquire">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary">
                <a href="#portfolio">View All Services</a>
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={enterpriseHero} alt="Enterprise data center" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-14 text-center">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">Our Service Portfolio</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full gradient-primary" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Card className="group h-full border-border p-7 transition-base hover:border-primary hover-lift">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-base group-hover:gradient-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl gradient-primary p-10 text-center text-primary-foreground shadow-elegant md:p-14">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Ready to Upgrade Your Infrastructure?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Our consultants are ready to design a custom roadmap for your enterprise needs.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-accent">
                <Link to="/inquire">Inquire Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/book">Schedule Consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
