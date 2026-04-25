import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getPortfolioServicesSync } from "@/lib/api/services";

export const Route = createFileRoute("/inquire")({
  component: InquirePage,
  validateSearch: (search: Record<string, unknown>): { service?: string } => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Get a Free IT Quote in Gurgaon & Delhi NCR | WISHTEK" },
      { name: "description", content: "Request a free quote for laptop repair, AMC, networking or IT solutions. Reply within 24 hours. Call 8851930450 or WhatsApp now." },
      { property: "og:title", content: "Get a Free IT Quote | WISHTEK Technology" },
      { property: "og:description", content: "Free consultation for laptop repair & enterprise IT services across Delhi NCR." },
      { property: "og:url", content: "https://wishtek.tech/inquire" },
      { name: "twitter:title", content: "Get a Free IT Quote | WISHTEK" },
      { name: "twitter:description", content: "Free consultation for laptop repair & IT services across Delhi NCR." },
    ],
    links: [{ rel: "canonical", href: "https://wishtek.tech/inquire" }],
  }),
});

function InquirePage() {
  const { service: preselected } = Route.useSearch();
  const [submitting, setSubmitting] = useState(false);
  const [serviceValue, setServiceValue] = useState<string | undefined>(preselected);
  const portfolio = getPortfolioServicesSync();
  const selectedService = portfolio.find((s) => s.id === serviceValue);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Inquiry sent! Our team will reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <SiteLayout>
      <section className="gradient-hero py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="font-display text-4xl font-extrabold md:text-6xl">Service Inquiry</h1>
          <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
            Connect with our experts at WISHTEK TECHNOLOGY. Fill out the form below for a tailored IT solution.
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
                  <Input required placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" required placeholder="name@company.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input required placeholder="+91 00000 00000" />
                </div>
                <div className="space-y-2">
                  <Label>Service Category</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="laptop">Laptop Repair</SelectItem>
                      <SelectItem value="amc">AMC / Maintenance</SelectItem>
                      <SelectItem value="network">Network Setup</SelectItem>
                      <SelectItem value="security">Security Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select a slot" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (10 AM - 1 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Query / Message</Label>
                <Textarea rows={5} placeholder="How can we help you?" />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-primary shadow-elegant">
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="bg-accent/50 p-6">
              <h3 className="font-display text-xl font-bold">Direct Contact</h3>
              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <a href="tel:8851930450" className="font-bold text-foreground hover:text-primary">8851930450</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success text-primary-foreground" style={{ background: "oklch(0.65 0.18 145)" }}>
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <a href="https://wa.me/918851930450" className="mt-1 inline-block w-full rounded-md px-4 py-2 text-center text-sm font-bold text-primary-foreground" style={{ background: "oklch(0.65 0.18 145)" }}>
                      Chat with Us
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Our Office</p>
                    <p className="text-sm font-semibold">Shop no. R1-121, M3M URBANA, Sector 67, Gurugram</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden p-0">
              <iframe
                title="Wishtek location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.060%2C28.380%2C77.110%2C28.420&layer=mapnik"
                className="h-56 w-full border-0"
                loading="lazy"
              />
              <div className="flex items-center justify-between bg-secondary/50 p-4">
                <span className="text-sm font-bold">M3M Urbana, Sector 67</span>
                <a href="https://maps.app.goo.gl/AUxvGZ8yiwG6SMLy7" target="_blank" rel="noopener" className="text-sm font-bold text-primary hover:underline">
                  Open Maps
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Trusted by Industry Leaders</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {["DELL", "HP", "LENOVO", "APPLE", "ASUS"].map((b) => (
              <span key={b} className="font-display text-lg font-extrabold tracking-widest text-muted-foreground/50">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <p className="text-sm text-muted-foreground">Prefer to book directly? <Link to="/book" className="font-bold text-primary hover:underline">Book a repair now →</Link></p>
      </section>
    </SiteLayout>
  );
}
