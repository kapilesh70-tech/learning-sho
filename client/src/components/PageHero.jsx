import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

/**
 * Inner-page hero on navy with editorial serif headline.
 */
export default function PageHero({ eyebrow, title, intro }) {
  const titleLines = Array.isArray(title) ? title : [title];
  return (
    <section className="relative overflow-hidden bg-navy pb-24 pt-40 sm:pb-32 sm:pt-48">
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-deep/20 blur-[140px]"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        {eyebrow && (
          <motion.p variants={fadeUp} className="eyebrow text-gold">
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-5xl font-serif text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>
        {intro && (
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/60"
          >
            {intro}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
