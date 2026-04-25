import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MonitorCog } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <MonitorCog className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-base font-extrabold text-primary">WISHTEK</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your trusted partner for expert laptop repairs and enterprise IT infrastructure across Delhi NCR. Directly from Nehru Place to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/book" className="hover:text-primary">Book a Repair</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><span>8851930450</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><span>support@wishtek.tech</span></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><span>Sector 67, Gurugram, IN</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2024 WISHTEK Technology. Crafted in Gurugram, India.
        </div>
      </div>
    </footer>
  );
}
