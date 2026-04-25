import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import enterpriseHero from "@/assets/enterprise-hero.jpg";
import { getPortfolioServicesSync } from "@/lib/api/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "IT Solutions & AMC Services in Gurgaon, Delhi NCR | WISHTEK" },
      { name: "description", content: "End-to-end IT solutions in Delhi NCR — networking, server, storage & backup, security, AMC, asset management, AV & low-voltage. Trusted by 150+ businesses." },
      { name: "keywords", content: "IT solutions provider Gurgaon, networking solutions Delhi NCR, AMC services, IT infrastructure solutions, enterprise IT support Noida" },
      { property: "og:title", content: "IT Solutions & AMC Services in Gurgaon, Delhi NCR | WISHTEK" },
      { property: "og:description", content: "Networking, server, storage, security, AMC and managed IT for SMBs and enterprises across Delhi NCR." },
      { property: "og:url", content: "https://wishtek.tech/services" },
      { property: "og:image", content: "https://wishtek.tech/og-services.jpg" },
      { name: "twitter:title", content: "IT Solutions & AMC Services in Gurgaon, Delhi NCR | WISHTEK" },
      { name: "twitter:description", content: "End-to-end IT infrastructure & AMC across Delhi NCR." },
      { name: "twitter:image", content: "https://wishtek.tech/og-services.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://wishtek.tech/services" }],
  }),
});

const portfolio = getPortfolioServicesSync();

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
              Enterprise IT <span className="text-gradient">Solutions in Delhi NCR</span>
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
              Networking, servers, storage & backup, security, AMC and managed IT support — engineered for businesses across Gurgaon, Delhi, Noida, Faridabad and Ghaziabad.
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
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Card className="group flex h-full flex-col border-border p-7 transition-base hover:border-primary hover-lift">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-base group-hover:gradient-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                      <Link to="/services/$serviceId" params={{ serviceId: s.id }}>
                        Get Details
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="gradient-primary">
                      <Link to="/inquire" search={{ service: s.id }}>
                        Inquire <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
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
