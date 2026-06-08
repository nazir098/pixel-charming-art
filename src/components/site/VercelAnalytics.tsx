import { Analytics } from "@vercel/analytics/react";
import { useLocation } from "@tanstack/react-router";

export function VercelAnalytics() {
  const { pathname } = useLocation();

  return <Analytics route={pathname} path={pathname} />;
}
