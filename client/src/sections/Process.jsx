import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { process } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

export default function Process() {
  return (
    <section className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Approach"
          title={["A disciplined path", "from gap to capability."]}
          tone="light"
        />

        {/* Horizontal on desktop, vertical on mobile */}
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20 grid list-none gap-12 lg:grid-cols-4 lg:gap-0"
        >
          {process.map((step, i) => (
            <motion.li
              key={step.number}
              variants={fadeUp}
              className="relative border-l border-white/15 pl-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pr-10 lg:pt-10"
            >
              {/* Node on the rule */}
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gold lg:-top-[5px] lg:left-0"
              />
              <p className="font-serif text-sm text-gold">{step.number}</p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/55">
                {step.description}
              </p>
              {i < process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mt-6 hidden font-serif text-white/25 lg:block"
                >
                  →
                </span>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
