import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/contact";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={whatsappHref("Hi WISHTEK, I need laptop repair at my doorstep.")}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-all hover:scale-110 md:flex ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.65 0.18 145)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
        <a
          href={telHref}
          aria-label="Call WISHTEK"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-bold text-primary"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={whatsappHref("Hi WISHTEK, I need laptop repair.")}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-bold text-white"
          style={{ background: "oklch(0.65 0.18 145)" }}
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      {/* spacer so content isn't hidden behind mobile bar */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  );
}
