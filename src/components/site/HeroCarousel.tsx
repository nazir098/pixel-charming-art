import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
  cardTitle?: string;
  cardCaption?: string;
};

export function HeroCarousel({ slides, autoMs = 5500 }: { slides: CarouselSlide[]; autoMs?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), autoMs);
    return () => clearInterval(t);
  }, [slides.length, autoMs]);

  const go = (n: number) => setI((n + slides.length) % slides.length);
  const current = slides[i];

  return (
    <div className="relative pb-16">
      {/* Image frame */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-elegant ring-1 ring-border">
        <AnimatePresence mode="wait">
          <motion.img
            key={i}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Floating info card */}
      <AnimatePresence mode="wait">
        {current.cardTitle && (
          <motion.div
            key={`card-${i}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute -bottom-2 right-4 z-10 max-w-[260px] rounded-xl border border-border bg-card p-4 shadow-elegant md:right-6"
          >
            <div className="flex items-start gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-foreground">{current.cardTitle}</p>
                {current.cardCaption && (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{current.cardCaption}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-4 flex gap-2 md:left-6">
        {slides.map((_, n) => (
          <button
            key={n}
            onClick={() => go(n)}
            aria-label={`Slide ${n + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              n === i ? "w-2.5 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
