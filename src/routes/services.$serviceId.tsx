import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getPortfolioServiceSync, getPortfolioServicesSync } from "@/lib/api/services";
import { CONTACT, telHref } from "@/lib/contact";

export const Route = createFileRoute("/services/$serviceId")({
  component: ServiceDetailPage,
  loader: ({ params }) => {
    const service = getPortfolioServiceSync(params.serviceId);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} in Gurgaon & Delhi NCR | WISHTEK` : "Service | WISHTEK";
    const desc = s?.detail?.overview ?? s?.desc ?? "Enterprise IT services across Delhi NCR.";
    const url = s ? `https://wishtek.tech/services/${s.id}` : "https://wishtek.tech/services";
    return {
      meta: [
        { title },
        { name: "description", content: desc.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: desc.slice(0, 160) },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc.slice(0, 160) },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="py-24 text-center">
        <h1 className="font-display text-4xl font-extrabold">Service not found</h1>
        <p className="mt-3 text-muted-foreground">We couldn't find that service.</p>
        <Button asChild className="mt-6 gradient-primary">
          <Link to="/services">Browse all services</Link>
        </Button>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <SiteLayout>
        <section className="py-24 text-center">
          <h1 className="font-display text-3xl font-extrabold">Something went wrong</h1>
          <p className="mt-3 text-muted-foreground">{error.message}</p>
          <Button className="mt-6" onClick={() => { router.invalidate(); reset(); }}>Retry</Button>
        </section>
      </SiteLayout>
    );
  },
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const detail = service.detail;
  const related = getPortfolioServicesSync().filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold md:text-6xl">
              {service.title}
            </h1>
            {detail?.tagline && (
              <p className="mt-3 text-lg text-primary font-semibold">{detail.tagline}</p>
            )}
            <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
              {detail?.overview ?? service.desc}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary shadow-elegant">
                <Link to="/inquire" search={{ service: service.id }}>
                  Inquire About {service.title} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary">
                <a href={telHref}>Call {CONTACT.phone}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features + Benefits */}
      {detail && (
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-8">
            <Card className="p-7">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">What's Included</h2>
              </div>
              <ul className="space-y-3">
                {detail.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-7">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold">Key Benefits</h2>
              </div>
              <ul className="space-y-3">
                {detail.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      )}

      {/* Use cases */}
      {detail && detail.useCases.length > 0 && (
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-8 flex items-center gap-2 text-primary">
              <Users className="h-5 w-5" />
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">Who It's For</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {detail.useCases.map((u) => (
                <Card key={u} className="p-5 text-center">
                  <p className="font-semibold">{u}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {detail && detail.faq.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="font-display text-2xl font-extrabold md:text-3xl">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="mt-6">
              {detail.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-2xl font-extrabold md:text-3xl">Related Services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Card key={r.id} className="p-6 hover-lift">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <Link to="/services/$serviceId" params={{ serviceId: r.id }} className="mt-4 inline-flex items-center text-sm font-bold text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl gradient-primary p-10 text-center text-primary-foreground shadow-elegant md:p-14">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Ready to discuss {service.title}?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Our consultants will respond within 24 hours with a tailored plan and quote.
            </p>
            <div className="mt-7 flex justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-accent">
                <Link to="/inquire" search={{ service: service.id }}>Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
