import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import repairImg from "@/assets/repair-closeup.jpg";
import { fetchPricingPlans } from "@/lib/api/services";

export const Route = createFileRoute("/pricing")({
  loader: async () => ({
    plans: await fetchPricingPlans(),
  }),
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "IT Service Pricing & Plans in Gurgaon | WISHTEK" },
      { name: "description", content: "Explore backend-driven WISHTEK pricing plans for website development, cloud solutions and managed IT services across Gurgaon and Delhi NCR." },
      { name: "keywords", content: "IT services pricing Gurgaon, managed IT pricing Delhi NCR, website development package Gurgaon" },
      { property: "og:title", content: "IT Service Pricing & Plans | WISHTEK Technology" },
      { property: "og:description", content: "Transparent service plans for managed IT, cloud solutions and digital delivery." },
      { property: "og:url", content: "https://wishtek.tech/pricing" },
      { name: "twitter:title", content: "IT Service Pricing & Plans | WISHTEK" },
      { name: "twitter:description", content: "Compare WISHTEK service plans driven directly from the backend." },
    ],
    links: [{ rel: "canonical", href: "https://wishtek.tech/pricing" }],
  }),
});

function PricingPage() {
  const { plans } = Route.useLoaderData();

  return (
    <SiteLayout>
      <section className="gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h1 className="font-display text-4xl font-extrabold md:text-6xl">
            Transparent Pricing.{" "}
            <span className="text-gradient">No Hidden Costs.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
            Backend-driven pricing for managed IT, cloud, digital delivery, and support plans. Clear scope, clear deliverables, and no hidden surprises.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-8">
          <div className="space-y-5">
            <Card className="overflow-hidden p-7">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">Guarantee</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold">90-Day Warranty</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                All repairs are covered under our comprehensive warranty. If the same issue persists, we fix it for free.
              </p>
              <div className="mt-5 overflow-hidden rounded-xl">
                <img src={repairImg} alt="Repair" className="h-44 w-full object-cover" loading="lazy" />
              </div>
            </Card>
            <Card className="gradient-deep p-7 text-primary-foreground">
              <h3 className="font-display text-xl font-extrabold">Transparent Pricing</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                What you see is what you pay. We provide a full cost breakdown before starting any work.
              </p>
            </Card>
          </div>

          <Card className="md:col-span-2 overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-border p-6">
              <h3 className="font-display text-xl font-bold">Service Plans & Pricing</h3>
              <Receipt className="h-5 w-5 text-primary" />
            </div>
            <div className="divide-y divide-border">
              {plans.map((plan) => (
                <div key={plan.id} className="px-6 py-6 transition-colors hover:bg-secondary/30">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {plan.serviceTitle}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <h4 className="font-display text-2xl font-extrabold">{plan.name}</h4>
                        {plan.featured && (
                          <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{plan.summary}</p>
                      {plan.features.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                          {plan.features.filter((feature) => feature.included).map((feature) => (
                            <span key={feature.label} className="inline-flex items-center gap-2 text-sm font-medium">
                              <Check className="h-4 w-4 text-primary" />
                              {feature.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="md:text-right">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        {plan.billingLabel}
                      </p>
                      <p className="mt-2 text-3xl font-extrabold text-foreground">{plan.priceLabel}</p>
                      <Link
                        to="/inquire"
                        search={{ service: plan.serviceSlug }}
                        className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="bg-secondary/40 p-5 text-xs italic text-muted-foreground">
              * Final scope and pricing can vary depending on project requirements, diagnostics, and deployment complexity.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Certified Partners & Parts
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["INTEL", "DELL", "HP", "LENOVO", "ASUS"].map((b) => (
              <span key={b} className="font-display text-xl font-extrabold tracking-widest text-muted-foreground/60">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/40 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Ready to Restore Your Device?</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Book an appointment online or visit our service center in Gurugram for a same-day diagnostic report.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="gradient-primary shadow-elegant">
              <Link to="/book">Book Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary">
              <Link to="/inquire">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
        <p className="mt-2 text-sm text-muted-foreground">All repairs covered by 90-day warranty</p>
      </section>
    </SiteLayout>
  );
}
