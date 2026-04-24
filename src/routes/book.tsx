import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BrandStrip } from "@/components/site/BrandStrip";
import expertImg from "@/assets/expert-service.jpg";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book a Repair — WISHTEK Technology" },
      { name: "description", content: "Professional IT services at your doorstep. Book a certified technician for your laptop repair." },
    ],
  }),
});

function BookPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Booking confirmed! We'll call you to schedule pickup.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <SiteLayout>
      <section className="gradient-hero py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-display text-4xl font-extrabold md:text-6xl">Book Your Repair</h1>
          <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
            Professional IT services at your doorstep. Fill in the details below to schedule a certified technician for your laptop repair.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
          <Card className="md:col-span-2 p-7 md:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input required placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input required placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Pickup Address</Label>
                <Textarea rows={3} placeholder="Full address including landmark, Gurugram" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Laptop Issue</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select the problem" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="screen">Screen Damage</SelectItem>
                      <SelectItem value="battery">Battery / Charging</SelectItem>
                      <SelectItem value="keyboard">Keyboard Issue</SelectItem>
                      <SelectItem value="slow">Slow Performance / Software</SelectItem>
                      <SelectItem value="liquid">Liquid Damage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Pickup Time</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Morning (10 AM - 1 PM)" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (10 AM - 1 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-primary shadow-elegant">
                <ShieldCheck className="mr-2 h-4 w-4" />
                {submitting ? "Confirming..." : "Confirm Booking"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Certified engineers. Same-day diagnostics available.
              </p>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="bg-accent/50 p-6">
              <h3 className="font-display text-xl font-bold">How It Works</h3>
              <div className="mt-5 space-y-4">
                {[
                  { n: 1, t: "Book Online", d: "Schedule a pickup using our simple form. No payment required upfront." },
                  { n: 2, t: "Free Pickup", d: "Our agent collects your device safely from your location in Gurugram." },
                  { n: 3, t: "Repair & Return", d: "Post-repair delivery to your doorstep within 24-48 hours." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl gradient-primary font-bold text-primary-foreground">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-bold">{s.t}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-display text-xl font-bold">Why Choose Us</h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Certified Local Technicians",
                  "Transparent Pricing (No Hidden Fees)",
                  "90-Day Warranty on All Parts",
                  "Data Privacy & Security Guaranteed",
                ].map((l) => (
                  <li key={l} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> {l}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="relative overflow-hidden p-0">
              <img src={expertImg} alt="Expert service" className="h-44 w-full object-cover" loading="lazy" />
              <div className="absolute bottom-3 left-3 rounded-xl bg-card p-3 shadow-card">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Expert Service</p>
                <p className="text-sm font-bold">Over 500+ Repairs Monthly</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <BrandStrip label="Brands we service" />
    </SiteLayout>
  );
}
