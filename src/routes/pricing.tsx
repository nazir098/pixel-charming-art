import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteLayout } from "@/components/site/SiteLayout";
import repairImg from "@/assets/repair-closeup.jpg";
import { getRepairRatesSync } from "@/lib/api/services";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Laptop Repair Price List in Gurgaon & Delhi NCR | WISHTEK" },
      { name: "description", content: "Transparent laptop repair pricing — screen ₹1,499, battery ₹899, keyboard ₹1,200. 90-day warranty. Free pickup & delivery across Delhi NCR." },
      { name: "keywords", content: "laptop repair price Gurgaon, laptop screen replacement cost, laptop battery price Delhi" },
      { property: "og:title", content: "Laptop Repair Price List | WISHTEK Technology" },
      { property: "og:description", content: "Transparent laptop repair rates with 90-day warranty across Delhi NCR." },
      { property: "og:url", content: "https://wishtek.tech/pricing" },
      { name: "twitter:title", content: "Laptop Repair Price List | WISHTEK" },
      { name: "twitter:description", content: "Transparent rates, no hidden fees, 90-day warranty." },
    ],
    links: [{ rel: "canonical", href: "https://wishtek.tech/pricing" }],
  }),
});

const rates = getRepairRatesSync();

function PricingPage() {
  return (
    <SiteLayout>
      <section className="gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h1 className="font-display text-4xl font-extrabold md:text-6xl">
            Transparent Pricing.{" "}
            <span className="text-gradient">No Hidden Costs.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
            Honest, upfront rates for all your IT repair and upgrade needs. Quality service backed by local trust and world-class standards.
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
              <h3 className="font-display text-xl font-bold">Standard Repair Rates</h3>
              <Receipt className="h-5 w-5 text-primary" />
            </div>
            <div className="grid grid-cols-12 gap-4 bg-secondary/50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <div className="col-span-7">Service Category</div>
              <div className="col-span-3">Starting From</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            <div className="divide-y divide-border">
              {rates.map((r) => (
                <div key={r.id} className="grid grid-cols-12 items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/30">
                  <div className="col-span-7 flex items-center gap-3">
                    <r.icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{r.label}</span>
                  </div>
                  <div className="col-span-3 font-bold text-foreground">{r.price}</div>
                  <Link to="/inquire" className="col-span-2 text-right text-sm font-bold text-primary hover:underline">
                    Contact Us
                  </Link>
                </div>
              ))}
            </div>
            <p className="bg-secondary/40 p-5 text-xs italic text-muted-foreground">
              * Prices may vary based on model complexity and parts availability.
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
