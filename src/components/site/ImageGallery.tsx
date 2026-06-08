import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  src?: string;
  alt: string;
  title?: string;
  category?: string;
  /** Tailwind aspect class — e.g. "aspect-[4/3]". Defaults vary by index for masonry feel. */
  span?: "sm" | "md" | "lg" | "tall" | "wide";
};

const spanClass: Record<NonNullable<GalleryItem["span"]>, string> = {
  sm: "md:col-span-1 md:row-span-1 aspect-square",
  md: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  lg: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
  tall: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto",
  wide: "md:col-span-2 md:row-span-1 aspect-[16/9]",
};

export function ImageGallery({
  items,
  title = "Our Work in Pictures",
  subtitle = "A look inside the Wishtek workshop and field deployments — real repairs, real impact.",
}: {
  items: GalleryItem[];
  title?: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? null : (i + 1) % items.length));
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {items.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => item.src && setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl shadow-card transition-base hover:shadow-elegant",
                spanClass[item.span ?? "md"]
              )}
              aria-label={item.alt}
            >
              {item.src ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category && (
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {item.category}
                      </span>
                    )}
                    {item.title && (
                      <h3 className="mt-1 font-display text-lg font-bold text-white">{item.title}</h3>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary to-accent/30 text-muted-foreground">
                  <ImageIcon className="h-10 w-10 opacity-40" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && items[active]?.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary-deep/95 p-4 backdrop-blur-md"
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={items[active].src}
              alt={items[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-5xl rounded-xl object-contain shadow-2xl"
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              {items[active].title || items[active].alt} · {active + 1} / {items.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
