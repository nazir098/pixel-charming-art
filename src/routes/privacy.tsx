import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — WISHTEK Technology" },
      { name: "description", content: "How WISHTEK Technology collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — WISHTEK Technology" },
      { property: "og:description", content: "How WISHTEK Technology collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <h1 className="font-display text-4xl font-extrabold md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-neutral mt-10 max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>WISHTEK Technology ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, and safeguard information when you use our laptop repair and IT services.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p>We may collect your name, phone number, email address, service address, device details, and details of the issue you report. Payment information is processed by trusted third-party gateways and is not stored on our servers.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>Your information is used to schedule pickups and deliveries, diagnose and repair devices, send service updates, raise invoices, and provide warranty support. We may also use it to improve our services and respond to your inquiries.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share limited information with delivery partners, payment processors, or component suppliers strictly to fulfill your service request, or when required by law.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Device Data</h2>
            <p>While repairing your device, our technicians may have incidental access to data stored on it. We do not copy, transfer, or retain any data from your device. We strongly recommend backing up important files before handover.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">6. Data Security</h2>
            <p>We follow reasonable administrative and technical safeguards to protect your information against unauthorized access, alteration, or disclosure.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at support@wishtek.tech.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground">8. Contact</h2>
            <p>For any privacy concerns, contact us at support@wishtek.tech or call 8851930450.</p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
