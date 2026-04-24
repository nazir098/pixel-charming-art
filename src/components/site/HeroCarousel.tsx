import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  image: string;
  imageAlt: string;
  cardTitle: string;
  cardCaption: string;
};

export function HeroCarousel({ slides, autoMs = 6000 }: { slides: HeroSlide[]; autoMs?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), autoMs);
    return () => clearInterval(t);
  }, [slides.length, autoMs]);

  const go = (n: number) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
      {/* Text column */}
      <div className="relative min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> {s.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
              {s.titleStart}{" "}
              <span className="text-gradient">{s.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">{s.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary font-semibold shadow-elegant">
                <Link to={s.primaryCta.to}>
                  {s.primaryCta.label} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to={s.secondaryCta.to}>{s.secondaryCta.label}</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-10 flex items-center gap-2">
          {slides.map((_, n) => (
            <button
              key={n}
              onClick={() => go(n)}
              aria-label={`Slide ${n + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all",
                n === i ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Image column */}
      <div className="relative pb-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-elegant ring-1 ring-border">
          <AnimatePresence mode="wait">
            <motion.img
              key={`img-${i}`}
              src={s.image}
              alt={s.imageAlt}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
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
                <p className="font-display text-sm font-bold text-foreground">{s.cardTitle}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.cardCaption}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
