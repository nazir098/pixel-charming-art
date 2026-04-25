/**
 * Services data layer.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO REPLACE WITH SPRING BOOT BACKEND LATER
 * ─────────────────────────────────────────────────────────────────────────────
 *  All UI components import ONLY from this file. To switch to a real backend:
 *
 *  1. Set VITE_API_BASE_URL in your .env (e.g. https://api.wishtek.tech)
 *  2. Replace the body of `fetchHomeServices()` and `fetchPortfolioServices()`
 *     with a real `fetch(...)` call against your Spring Boot endpoints.
 *  3. Make sure your backend returns objects matching `HomeServiceDTO` and
 *     `PortfolioServiceDTO` shapes (icon is a string key, not a component).
 *
 *  No component code needs to change — icons are mapped from string keys to
 *  Lucide components inside `resolveIcon()`.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  Monitor, Battery, Keyboard, HardDrive,
  Server, CloudUpload, Layers, Network, Shield, ClipboardCheck,
  Smartphone, Video, Zap, Code2, Award, Cpu, Droplets,
  type LucideIcon,
} from "lucide-react";

/** Icon registry — backend sends a string key, frontend maps it to a component. */
const ICON_MAP: Record<string, LucideIcon> = {
  monitor: Monitor,
  battery: Battery,
  keyboard: Keyboard,
  "hard-drive": HardDrive,
  server: Server,
  "cloud-upload": CloudUpload,
  layers: Layers,
  network: Network,
  shield: Shield,
  "clipboard-check": ClipboardCheck,
  smartphone: Smartphone,
  video: Video,
  zap: Zap,
  "code-2": Code2,
  award: Award,
  cpu: Cpu,
  droplets: Droplets,
};

export function resolveIcon(key: string): LucideIcon {
  return ICON_MAP[key] ?? Monitor;
}

/* ───────────── Backend DTOs (what Spring Boot will return) ───────────── */

export interface HomeServiceDTO {
  id: string;
  icon: string;      // icon key, e.g. "monitor"
  title: string;
  desc: string;
  price: string;
}

export interface PortfolioServiceDTO {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

/* ───────────── UI-ready models (icon resolved to component) ───────────── */

export interface HomeService {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  price: string;
}

export interface PortfolioService {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

/* ───────────── Mock data (replace with backend later) ───────────── */

const MOCK_HOME_SERVICES: HomeServiceDTO[] = [
  { id: "screen",   icon: "monitor",    title: "Screen Replacement", desc: "Cracked or dead pixels? We replace OEM-grade panels same-day.", price: "₹1,499" },
  { id: "battery",  icon: "battery",    title: "Battery Service",    desc: "Drain issues or swelling? Premium OEM battery replacements available.", price: "₹1,499" },
  { id: "keyboard", icon: "keyboard",   title: "Keyboard Repair",    desc: "Sticky keys or non-responsive boards. Full replacements for all layouts.", price: "₹1,200" },
  { id: "software", icon: "hard-drive", title: "Software & OS",      desc: "Slow laptop, virus removal, OS install, and data recovery services.", price: "₹599" },
];

const MOCK_PORTFOLIO_SERVICES: PortfolioServiceDTO[] = [
  { id: "compute",     icon: "monitor",         title: "Compute Solutions",            desc: "Scalable processing power including workstations and VDI environments tailored for heavy enterprise workloads." },
  { id: "server",      icon: "server",          title: "Server",                       desc: "High-availability server deployments, configuration, and management for mission-critical applications." },
  { id: "storage",     icon: "cloud-upload",    title: "Storage & Backup",             desc: "Robust data protection strategies and high-speed storage architectures to ensure business continuity." },
  { id: "hci",         icon: "layers",          title: "Hyper Converged Infrastructure", desc: "Streamlined IT operations by combining compute, storage, and networking into a single agile system." },
  { id: "networking",  icon: "network",         title: "Networking Solutions",         desc: "Enterprise-grade wired and wireless networking designed for seamless connectivity and low latency." },
  { id: "security",    icon: "shield",          title: "Security Solutions",           desc: "Comprehensive cybersecurity frameworks, firewalls, and endpoint protection to safeguard your digital assets." },
  { id: "asset",       icon: "clipboard-check", title: "Asset Management",             desc: "Lifecycle tracking and optimization of your IT hardware and software assets to maximize ROI." },
  { id: "mobility",    icon: "smartphone",      title: "Mobility Solutions",           desc: "Secure mobile device management and remote access solutions for a modern, hybrid workforce." },
  { id: "av",          icon: "video",           title: "Audio Video Solutions",        desc: "Integrated AV systems for conference rooms, digital signage, and immersive collaborative spaces." },
  { id: "lowvoltage",  icon: "zap",             title: "Low Voltage Solutions",        desc: "Structured cabling, surveillance, and access control systems for physical building infrastructure." },
  { id: "software",    icon: "code-2",          title: "Software Solutions",           desc: "License management and custom software implementations to drive operational productivity." },
  { id: "amc",         icon: "award",           title: "AMC / Annual Maintenance",     desc: "Proactive maintenance contracts ensuring your hardware operates at peak efficiency year-round." },
];

/* ───────────── Public API (UI calls these) ───────────── */

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";
const USE_BACKEND = Boolean(API_BASE);

function hydrate<T extends { icon: string }>(dto: T): Omit<T, "icon"> & { icon: LucideIcon } {
  const { icon, ...rest } = dto;
  return { ...rest, icon: resolveIcon(icon) } as Omit<T, "icon"> & { icon: LucideIcon };
}

/** Fetch services for the home page (4 featured repair services). */
export async function fetchHomeServices(): Promise<HomeService[]> {
  if (USE_BACKEND) {
    // TODO (Spring Boot): GET {API_BASE}/api/services/home
    const res = await fetch(`${API_BASE}/api/services/home`);
    if (!res.ok) throw new Error(`Failed to load home services: ${res.status}`);
    const data: HomeServiceDTO[] = await res.json();
    return data.map(hydrate);
  }
  return MOCK_HOME_SERVICES.map(hydrate);
}

/** Fetch the full enterprise IT services portfolio. */
export async function fetchPortfolioServices(): Promise<PortfolioService[]> {
  if (USE_BACKEND) {
    // TODO (Spring Boot): GET {API_BASE}/api/services/portfolio
    const res = await fetch(`${API_BASE}/api/services/portfolio`);
    if (!res.ok) throw new Error(`Failed to load portfolio services: ${res.status}`);
    const data: PortfolioServiceDTO[] = await res.json();
    return data.map(hydrate);
  }
  return MOCK_PORTFOLIO_SERVICES.map(hydrate);
}

/** Synchronous accessors — used during the mock phase for instant render.
 *  Once backend is wired, prefer the async `fetch*` functions inside route loaders. */
export function getHomeServicesSync(): HomeService[] {
  return MOCK_HOME_SERVICES.map(hydrate);
}

export function getPortfolioServicesSync(): PortfolioService[] {
  return MOCK_PORTFOLIO_SERVICES.map(hydrate);
}

/* ───────────── Pricing Rates (Standard Repair Rates table) ───────────── */

export interface RepairRateDTO {
  id: string;
  icon: string;        // icon key, e.g. "monitor"
  label: string;       // Service Category
  price: string;       // Starting From, e.g. "₹1,499"
}

export interface RepairRate {
  id: string;
  icon: LucideIcon;
  label: string;
  price: string;
}

const MOCK_REPAIR_RATES: RepairRateDTO[] = [
  { id: "screen",   icon: "smartphone", label: "Screen Replacement",         price: "₹1,499" },
  { id: "battery",  icon: "battery",    label: "Battery Replacement",        price: "₹899"   },
  { id: "keyboard", icon: "keyboard",   label: "Keyboard Repair",            price: "₹1,200" },
  { id: "ramssd",   icon: "cpu",        label: "RAM/SSD Upgrade",            price: "₹499"   },
  { id: "liquid",   icon: "droplets",   label: "Liquid Damage Diagnostics",  price: "₹750"   },
];

/** Async — wire up Spring Boot at GET {API_BASE}/api/pricing/rates later. */
export async function fetchRepairRates(): Promise<RepairRate[]> {
  if (USE_BACKEND) {
    // TODO (Spring Boot): GET {API_BASE}/api/pricing/rates
    const res = await fetch(`${API_BASE}/api/pricing/rates`);
    if (!res.ok) throw new Error(`Failed to load repair rates: ${res.status}`);
    const data: RepairRateDTO[] = await res.json();
    return data.map(hydrate);
  }
  return MOCK_REPAIR_RATES.map(hydrate);
}

/** Sync accessor for instant render during the mock phase. */
export function getRepairRatesSync(): RepairRate[] {
  return MOCK_REPAIR_RATES.map(hydrate);
}
