import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — WISHTEK Technology" },
      { name: "description", content: "Refund and cancellation policy for WISHTEK Technology repair and IT services." },
      { property: "og:title", content: "Refund Policy — WISHTEK Technology" },
      { property: "og:description", content: "Refund and cancellation policy for WISHTEK Technology repair and IT services." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">Refund Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Overview</h2>
            <p>We stand behind the quality of our repairs. This policy explains when refunds, replacements, or re-services are available.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Diagnosis Fee</h2>
            <p>If a diagnosis fee was collected, it is non-refundable as it covers the technician's time and assessment, regardless of whether you proceed with the repair.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Service Cancellation</h2>
            <p>You may cancel a scheduled pickup or service free of charge before our technician begins work. Once parts have been ordered or work has commenced, cancellation may incur charges for components and labour already invested.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Repair Not Successful</h2>
            <p>If we are unable to fix the reported issue, you will only be charged for the diagnosis fee (if applicable). Any advance paid towards parts or labour will be refunded within 7–10 business days to the original payment method.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Warranty Claims</h2>
            <p>If the same issue recurs within the 90-day warranty period, we will re-service the device free of charge. If the problem cannot be resolved, we will refund the labour portion of the original charge. Replaced parts remain warrantied per the component supplier's terms.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">6. Non-Refundable Items</h2>
            <p>Custom-ordered parts, used or installed components, and software/data recovery services are non-refundable once delivered, except in cases of proven defect.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">7. How to Request a Refund</h2>
            <p>Email support@wishtek.tech with your service ID, invoice, and reason for the request. We aim to respond within 2 business days and process approved refunds within 7–10 business days.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">8. Contact</h2>
            <p>For questions about this policy, email support@wishtek.tech or call 8851930450.</p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
