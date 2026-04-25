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
  /** Optional long-form detail. Backend can return this from GET /api/services/portfolio/{id}. */
  detail?: ServiceDetailDTO;
}

export interface ServiceDetailDTO {
  tagline: string;
  overview: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  faq: { q: string; a: string }[];
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
  detail?: ServiceDetailDTO;
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

/* ───────────── Service detail content (generic, per service) ─────────────
 * Backend later: GET {API_BASE}/api/services/portfolio/{id} returns ServiceDetailDTO.
 * Until then, we attach static generic content keyed by service id below.
 */
const MOCK_SERVICE_DETAILS: Record<string, ServiceDetailDTO> = {
  compute: {
    tagline: "Workstations & VDI built for demanding workloads",
    overview: "We design, deploy and support compute environments — from high-performance desktops and workstations to virtual desktop infrastructure (VDI) — sized precisely for your team's workloads across Delhi NCR.",
    features: ["High-performance workstations", "VDI / virtual desktops", "GPU & CAD workstations", "OEM hardware (Dell, HP, Lenovo)", "Centralised management", "Pan-NCR deployment"],
    benefits: ["Faster project turnaround", "Lower TCO vs. ad-hoc buying", "Predictable performance", "Reduced downtime"],
    useCases: ["Engineering & CAD teams", "Design & video studios", "Trading desks", "Remote / hybrid workforces"],
    faq: [
      { q: "Do you supply OEM hardware?", a: "Yes — Dell, HP, Lenovo and Apple, with full warranty support." },
      { q: "Can you handle pan-NCR rollout?", a: "Absolutely. We deploy across Gurgaon, Delhi, Noida, Faridabad and Ghaziabad." },
    ],
  },
  server: {
    tagline: "Mission-critical server deployments",
    overview: "Rack, tower and blade server solutions — sized, deployed and maintained for high availability. We handle hardware, OS, virtualisation and ongoing monitoring.",
    features: ["Rack / tower / blade servers", "Windows & Linux setup", "Virtualisation (VMware / Hyper-V)", "RAID & redundancy", "24×7 monitoring", "Patch & firmware management"],
    benefits: ["High uptime SLAs", "Scalable as you grow", "Vendor-agnostic design", "Single point of accountability"],
    useCases: ["Application hosting", "Database servers", "File / print servers", "Domain controllers"],
    faq: [
      { q: "Do you offer 24×7 server support?", a: "Yes, under our AMC plans we provide round-the-clock monitoring and response." },
      { q: "Can you migrate our existing servers?", a: "Yes — we plan and execute zero-downtime migrations." },
    ],
  },
  storage: {
    tagline: "Storage & backup that protect your business",
    overview: "From on-prem SAN/NAS to cloud and hybrid backup, we design storage architectures that scale with your data — with verified backups and tested recovery.",
    features: ["SAN / NAS deployment", "Cloud & hybrid backup", "Disaster recovery planning", "Snapshot & replication", "Backup verification", "Restore drills"],
    benefits: ["Business continuity", "Ransomware resilience", "Compliance-ready", "Predictable RTO / RPO"],
    useCases: ["File servers", "Database backups", "VM image protection", "Long-term archival"],
    faq: [
      { q: "How often are backups tested?", a: "We schedule regular restore drills as part of every AMC contract." },
      { q: "Do you support cloud backup?", a: "Yes — AWS, Azure, GCP and dedicated providers." },
    ],
  },
  hci: {
    tagline: "Compute, storage and networking — unified",
    overview: "Hyper-Converged Infrastructure consolidates your data centre into a single, software-defined stack — easier to manage, faster to scale, and cheaper to run.",
    features: ["Nutanix / VxRail / Azure Stack HCI", "Single-pane management", "Linear scale-out", "Built-in data protection", "Hybrid-cloud ready"],
    benefits: ["Reduced data centre footprint", "Lower operational overhead", "Faster provisioning", "Simplified upgrades"],
    useCases: ["VDI at scale", "Branch / ROBO deployments", "Private cloud", "Test & dev environments"],
    faq: [
      { q: "Which HCI platforms do you support?", a: "Nutanix, Dell VxRail, Azure Stack HCI and HPE SimpliVity." },
      { q: "Is HCI suitable for SMBs?", a: "Yes — entry-level HCI clusters start small and scale on demand." },
    ],
  },
  networking: {
    tagline: "Wired & wireless networks engineered for uptime",
    overview: "End-to-end LAN, WAN, Wi-Fi and SD-WAN design and deployment — built for low latency, high availability and easy growth.",
    features: ["Structured cabling", "Cisco / Aruba / Fortinet", "Enterprise Wi-Fi 6/6E", "SD-WAN", "VLAN & segmentation", "Network monitoring"],
    benefits: ["Reliable connectivity", "Branch-office consistency", "Secure segmentation", "Simplified troubleshooting"],
    useCases: ["Office HQ rollouts", "Multi-site businesses", "Warehouses & factories", "Hospitality & retail"],
    faq: [
      { q: "Do you handle structured cabling too?", a: "Yes — Cat6/6A, fibre backbone and rack dressing included." },
      { q: "Can you manage our existing network?", a: "Yes, we onboard existing networks under AMC with zero downtime." },
    ],
  },
  security: {
    tagline: "Defend endpoints, networks and identities",
    overview: "Layered security — firewalls, endpoint protection, email security, MFA and monitoring — sized for SMBs and enterprises across Delhi NCR.",
    features: ["Next-gen firewalls (Fortinet / Sophos / Palo Alto)", "EDR / XDR endpoint protection", "Email & web filtering", "MFA & identity", "Vulnerability scanning", "Security audits"],
    benefits: ["Reduced breach risk", "Regulatory compliance", "Faster incident response", "Visibility across the stack"],
    useCases: ["Finance & legal firms", "Healthcare clinics", "E-commerce & SaaS", "Manufacturing"],
    faq: [
      { q: "Do you do security audits?", a: "Yes — VAPT, configuration reviews and policy audits on demand." },
      { q: "Can you respond to incidents?", a: "Yes, AMC clients get incident-response support under SLA." },
    ],
  },
  asset: {
    tagline: "Track, optimise and extend your IT assets",
    overview: "A single source of truth for every laptop, server, license and peripheral — so procurement, refresh and warranty decisions are data-driven.",
    features: ["Asset discovery & tagging", "Lifecycle tracking", "License management", "Warranty alerts", "Disposal & buyback", "Reports & dashboards"],
    benefits: ["Higher asset utilisation", "Lower software-license waste", "Cleaner audits", "Predictable refresh cycles"],
    useCases: ["Multi-office IT teams", "Audit & compliance prep", "Hardware refresh planning"],
    faq: [
      { q: "Do you provide tagging on-site?", a: "Yes — physical asset tagging across Delhi NCR." },
      { q: "Can you integrate with our ITSM?", a: "Yes, common ITSM and HRMS systems are supported." },
    ],
  },
  mobility: {
    tagline: "Secure devices for a mobile workforce",
    overview: "Mobile Device Management (MDM), secure remote access, and BYOD policies — so your team can work from anywhere without compromising security.",
    features: ["MDM (Intune / Jamf / Workspace ONE)", "BYOD policy & enrolment", "Conditional access", "Remote wipe & locate", "App distribution", "VPN / ZTNA"],
    benefits: ["Hybrid-work ready", "Lost-device safety", "Consistent security posture", "Faster onboarding"],
    useCases: ["Field sales teams", "Remote engineers", "Executive devices", "BYOD-heavy orgs"],
    faq: [
      { q: "Which MDM platforms do you support?", a: "Microsoft Intune, Jamf, VMware Workspace ONE and Google MDM." },
      { q: "Can you enrol existing devices?", a: "Yes, with zero-touch and bulk enrolment workflows." },
    ],
  },
  av: {
    tagline: "Conference rooms, signage & immersive AV",
    overview: "Design and installation of audio-visual systems — from huddle rooms to boardrooms, training centres and digital signage networks.",
    features: ["Video conferencing (Zoom / Teams / Google Meet rooms)", "Display walls & projectors", "Digital signage", "Wireless presentation", "Room scheduling", "Acoustic treatment"],
    benefits: ["Better hybrid meetings", "Stronger brand presence", "Reliable A/V uptime", "Single-vendor accountability"],
    useCases: ["Boardrooms", "Training rooms", "Auditoriums", "Retail signage"],
    faq: [
      { q: "Do you certify rooms for Teams / Zoom?", a: "Yes — we deploy MTR and ZR-certified hardware." },
      { q: "Do you handle large displays / video walls?", a: "Yes, including LED walls and tiled displays." },
    ],
  },
  lowvoltage: {
    tagline: "Cabling, surveillance & access control",
    overview: "Physical infrastructure — structured cabling, CCTV, access control, intercoms and PA systems — designed and installed to enterprise standards.",
    features: ["Cat6 / Cat6A / fibre cabling", "IP CCTV with NVR", "Access control & biometrics", "Intercom & PA", "Cable management", "AMC for low-voltage systems"],
    benefits: ["Future-proof building", "Centralised security", "Compliance-ready", "Lower long-term costs"],
    useCases: ["New office fit-outs", "Warehouses & factories", "Schools & campuses", "Residential complexes"],
    faq: [
      { q: "Do you provide AMC on CCTV / access control?", a: "Yes, under our low-voltage AMC plans." },
      { q: "Can you integrate with existing systems?", a: "Yes — most major brands are supported." },
    ],
  },
  software: {
    tagline: "Licenses, deployment & custom software",
    overview: "Microsoft, Adobe, antivirus, productivity and custom-built software — procured, licensed, deployed and supported by one team.",
    features: ["Microsoft 365 / Google Workspace", "Adobe Creative Cloud", "Antivirus & EDR licenses", "Custom internal tools", "License-compliance audits", "Patch management"],
    benefits: ["License-cost savings", "Faster deployment", "Audit-ready compliance", "Single point of support"],
    useCases: ["License renewals", "New-office software setup", "Custom internal portals", "Compliance audits"],
    faq: [
      { q: "Do you build custom software?", a: "Yes — internal tools, dashboards and integrations." },
      { q: "Can you manage our license renewals?", a: "Yes, including reminders and consolidated billing." },
    ],
  },
  amc: {
    tagline: "Predictable IT support, year-round",
    overview: "Annual Maintenance Contracts that cover preventive maintenance, on-site / remote support, spare-parts SLAs and reporting — so your team can focus on the business.",
    features: ["Preventive maintenance visits", "On-site & remote support", "Spare-parts SLA", "Asset & ticket reporting", "Quarterly reviews", "Pan-NCR coverage"],
    benefits: ["Predictable IT cost", "Reduced downtime", "Faster issue resolution", "One vendor for everything"],
    useCases: ["SMBs without in-house IT", "Multi-branch businesses", "Co-working & shared offices", "Schools & clinics"],
    faq: [
      { q: "What's your response SLA?", a: "Standard: 4 working hours remote / next-business-day on-site. Premium SLAs available." },
      { q: "Do you cover laptops, desktops and servers?", a: "Yes — plus printers, networking and CCTV under bundled AMC." },
    ],
  },
};

function attachDetail(dto: PortfolioServiceDTO): PortfolioServiceDTO {
  return { ...dto, detail: dto.detail ?? MOCK_SERVICE_DETAILS[dto.id] };
}

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
    return data.map(attachDetail).map(hydrate);
  }
  return MOCK_PORTFOLIO_SERVICES.map(attachDetail).map(hydrate);
}

/** Fetch a single portfolio service (with detail content) by id. */
export async function fetchPortfolioService(id: string): Promise<PortfolioService | null> {
  if (USE_BACKEND) {
    // TODO (Spring Boot): GET {API_BASE}/api/services/portfolio/{id}
    const res = await fetch(`${API_BASE}/api/services/portfolio/${encodeURIComponent(id)}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Failed to load service ${id}: ${res.status}`);
    const data: PortfolioServiceDTO = await res.json();
    return hydrate(attachDetail(data));
  }
  const dto = MOCK_PORTFOLIO_SERVICES.find((s) => s.id === id);
  return dto ? hydrate(attachDetail(dto)) : null;
}

/** Synchronous accessors — used during the mock phase for instant render.
 *  Once backend is wired, prefer the async `fetch*` functions inside route loaders. */
export function getHomeServicesSync(): HomeService[] {
  return MOCK_HOME_SERVICES.map(hydrate);
}

export function getPortfolioServicesSync(): PortfolioService[] {
  return MOCK_PORTFOLIO_SERVICES.map(attachDetail).map(hydrate);
}

export function getPortfolioServiceSync(id: string): PortfolioService | null {
  const dto = MOCK_PORTFOLIO_SERVICES.find((s) => s.id === id);
  return dto ? hydrate(attachDetail(dto)) : null;
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
