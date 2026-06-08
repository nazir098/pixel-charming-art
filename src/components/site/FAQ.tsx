import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "Frequently Asked Questions", subtitle }: { items: FAQItem[]; title?: string; subtitle?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-bold md:text-lg">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  );
}
