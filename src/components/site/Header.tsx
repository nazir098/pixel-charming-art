import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/inquire", label: "Inquire" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary shadow-glow">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight text-primary">
            WISHTEK<span className="text-foreground"> TECHNOLOGY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-colors hover:text-primary",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="hidden gradient-primary font-semibold shadow-elegant md:inline-flex">
            <Link to="/book">Book Now</Link>
          </Button>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col p-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 gradient-primary">
              <Link to="/book" onClick={() => setOpen(false)}>Book Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
