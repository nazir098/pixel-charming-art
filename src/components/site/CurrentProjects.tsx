import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Network, MonitorSmartphone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectExterior from "@/assets/project-omc-exterior.jpg";
import projectFacade from "@/assets/project-omc-facade.jpg";
import projectCrane from "@/assets/project-omc-crane.jpg";

const highlights = [
  { icon: Building2, label: "Public Sector Delivery" },
  { icon: Network, label: "Network & Infrastructure Readiness" },
  { icon: MonitorSmartphone, label: "Campus Technology Rollout" },
];

export function CurrentProjects() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Current Projects
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
            Supporting OMC at <span className="text-gradient">project scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            WISHTEK is currently supporting the Odisha Mining Corporation (OMC) project in Bhubaneswar with
            on-site technology planning, infrastructure readiness, and execution support for the upcoming
            office environment across the campus.
          </p>
        </div>

        {/* Featured project layout */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Big image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="group relative h-full overflow-hidden rounded-3xl shadow-elegant ring-1 ring-border">
              <img
                src={projectExterior}
                alt="Government building project in Odisha — exterior view"
                loading="lazy"
                width={1280}
                height={896}
                className="h-full max-h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <MapPin className="h-3 w-3" /> Odisha · Live Project
                </div>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-white md:text-3xl">
                  Odisha Mining Corporation (OMC) Office Project
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/85">
                  Site execution support for a multi-floor OMC office development in Bhubaneswar, including
                  network backbone planning, floor-wise technology readiness, and enterprise infrastructure
                  coordination.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column — two stacked images */}
          <div className="grid gap-6 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-border"
            >
              <img
                src={projectFacade}
                alt="Front facade progress for the Odisha Mining Corporation office project in Bhubaneswar"
                loading="lazy"
                width={1280}
                height={896}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Civil & IT Coordination</p>
                <p className="mt-1 font-display text-base font-bold text-white">Facade and Floor Plate Readiness</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-border"
            >
              <img
                src={projectCrane}
                alt="Construction crane and upper structure view of the OMC office project"
                loading="lazy"
                width={1280}
                height={896}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Execution Support</p>
                <p className="mt-1 font-display text-base font-bold text-white">Infrastructure Planning in Progress</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights + CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:p-8">
          <div className="flex flex-wrap gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="h-4 w-4" />
                </span>
                {h.label}
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="gradient-primary shadow-elegant">
            <Link to="/inquire">
              Discuss your project <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
