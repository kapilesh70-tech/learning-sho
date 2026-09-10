import { motion } from "framer-motion";
import StatCounter from "../components/StatCounter";
import { stats } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

export default function TrustSection() {
  return (
    <section className="border-b border-line bg-offwhite">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-5 sm:grid-cols-2 sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:divide-x lg:px-12"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="py-12 sm:px-8 sm:py-16 first:lg:pl-0"
          >
            <p className="font-serif text-4xl tracking-tight text-navy sm:text-5xl">
              {stat.value !== null ? (
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="gradient-text"
                />
              ) : (
                <span className="text-[1.6rem] uppercase tracking-[0.08em] sm:text-[1.9rem]">
                  {stat.display}
                </span>
              )}
            </p>
            <p className="eyebrow mt-4 text-mist">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
