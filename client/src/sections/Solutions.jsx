import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";
import { services } from "../data/content";
import { stagger, viewport } from "../lib/motion";

export default function Solutions() {
  return (
    <section className="border-t border-line bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Consulting Solutions"
            title={["Capability building", "built around business reality."]}
            intro="Every intervention starts with the business context, the capability gap and the change that needs to happen — not with a course catalogue."
          />
          <div className="hidden pb-2 lg:block">
            <Button to="/solutions" variant="link" tone="dark">
              All Solutions
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 border-b border-line"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>

        <div className="mt-12 lg:hidden">
          <Button to="/solutions" variant="link" tone="dark">
            All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
