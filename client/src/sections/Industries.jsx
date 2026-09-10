import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { industries } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

export default function Industries() {
  return (
    <section className="border-b border-line bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            eyebrow="Industries"
            title={["Capability built", "across sectors."]}
            intro="Cross-industry experience means interventions are grounded in how different businesses actually operate."
          />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid list-none grid-cols-2 gap-x-10 self-center"
          >
            {industries.map((industry) => (
              <motion.li
                key={industry}
                variants={fadeUp}
                className="flex items-baseline gap-4 border-b border-line py-4"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-gold"
                />
                <span className="text-[15px] font-medium tracking-wide text-navy">
                  {industry}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
