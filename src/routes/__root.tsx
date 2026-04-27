import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { StickyCTA } from "@/components/site/StickyCTA";
import { CONTACT } from "@/lib/contact";

import appCss from "../styles.css?url";

const SITE_URL = "https://wishtek.tech";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "WISHTEK Technology",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: `+91-${CONTACT.phone}`,
  email: CONTACT.supportEmail,
  priceRange: "₹₹",
  description:
    "IT services company in Gurgaon — networking, servers, AMC, cyber security and managed IT support for businesses in Sector 62, 65, 66, 67, Golf Course Extension and across Gurugram. Doorstep laptop repair also available across Delhi NCR.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop no. R1-121, M3M URBANA, Sector 67",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122102",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.4089, longitude: 77.0926 },
  hasMap: "https://maps.app.goo.gl/AUxvGZ8yiwG6SMLy7",
  areaServed: [
    {
      "@type": "Place",
      name: "Gurgaon (Gurugram)",
      containedInPlace: { "@type": "City", name: "Gurugram" },
    },
    { "@type": "Place", name: "Sector 62, Gurugram" },
    { "@type": "Place", name: "Sector 65, Gurugram" },
    { "@type": "Place", name: "Sector 66, Gurugram" },
    { "@type": "Place", name: "Sector 67, Gurugram" },
    { "@type": "Place", name: "Sector 68, Gurugram" },
    { "@type": "Place", name: "Sector 69, Gurugram" },
    { "@type": "Place", name: "Sector 70, Gurugram" },
    { "@type": "Place", name: "Golf Course Extension Road, Gurugram" },
    { "@type": "Place", name: "Sohna Road, Gurugram" },
    { "@type": "Place", name: "M3M Urbana, Gurugram" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "City", name: "Ghaziabad" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://maps.app.goo.gl/AUxvGZ8yiwG6SMLy7"],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "WISHTEK Technology" },
      { name: "theme-color", content: "#0a2540" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "WISHTEK Technology" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IN-HR" },
      { name: "geo.placename", content: "Gurugram, Sector 67" },
      { name: "geo.position", content: "28.4089;77.0926" },
      { name: "ICBM", content: "28.4089, 77.0926" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <StickyCTA />
      <Toaster position="top-right" richColors />
    </>
  );
}
