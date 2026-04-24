import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
  badge?: string;
  title?: string;
  caption?: string;
};

export function HeroCarousel({ slides, autoMs = 5000 }: { slides: CarouselSlide[]; autoMs?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), autoMs);
    return () => clearInterval(t);
  }, [slides.length, autoMs]);

  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/30 to-primary-glow/20 blur-3xl" />
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-accent shadow-elegant md:aspect-[4/5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img src={slides[i].src} alt={slides[i].alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            {(slides[i].title || slides[i].caption) && (
              <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                {slides[i].badge && (
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {slides[i].badge}
                  </span>
                )}
                {slides[i].title && <h3 className="mt-2 font-display text-2xl font-extrabold">{slides[i].title}</h3>}
                {slides[i].caption && <p className="mt-1 text-sm text-primary-foreground/85">{slides[i].caption}</p>}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go(i - 1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 text-foreground shadow-card backdrop-blur transition hover:bg-card"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 text-foreground shadow-card backdrop-blur transition hover:bg-card"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, n) => (
          <button
            key={n}
            onClick={() => go(n)}
            aria-label={`Slide ${n + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              n === i ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
