import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — WISHTEK Technology" },
      { name: "description", content: "Terms and conditions governing the use of WISHTEK Technology repair and IT services." },
      { property: "og:title", content: "Terms of Service — WISHTEK Technology" },
      { property: "og:description", content: "Terms and conditions governing the use of WISHTEK Technology repair and IT services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>By booking a repair or engaging WISHTEK Technology for any service, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Services</h2>
            <p>We provide laptop repair, doorstep pickup and delivery, and enterprise IT solutions across Delhi NCR. Service availability, turnaround time, and pricing are subject to diagnosis and parts availability.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Quotes and Approval</h2>
            <p>All repair quotes are estimates based on initial assessment. Final pricing is confirmed after diagnosis and requires your explicit approval before any chargeable work begins.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Warranty</h2>
            <p>We provide a 90-day warranty on parts replaced and labour performed by us, covering manufacturing defects and workmanship. Warranty does not cover physical damage, liquid damage, or unrelated failures occurring after the repair.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Customer Responsibilities</h2>
            <p>You are responsible for backing up data on your device before handover. You confirm that the device is legally owned by you or that you have authority to request service.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our liability for any claim arising from our services is limited to the amount paid by you for that specific service. We are not liable for indirect or consequential losses, including loss of data.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">7. Unclaimed Devices</h2>
            <p>Devices not collected within 60 days of repair completion, despite reasonable notice, may be considered abandoned and disposed of at our discretion to recover storage and service costs.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">8. Governing Law</h2>
            <p>These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Gurugram, Haryana.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">9. Contact</h2>
            <p>Questions about these terms? Email support@wishtek.tech or call 8851930450.</p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
