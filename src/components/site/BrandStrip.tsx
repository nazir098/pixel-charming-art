const brands = ["DELL", "HP", "LENOVO", "APPLE", "ACER", "ASUS", "MSI"];

export function BrandStrip({ label = "Trusted by leading enterprises across India" }: { label?: string }) {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-16">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display text-xl font-extrabold tracking-widest text-muted-foreground/60 transition-colors hover:text-primary md:text-2xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
