import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";

/**
 * Animated vertical career timeline.
 * tone: "dark" for light grounds, "light" for navy grounds.
 */
export default function Timeline({ items, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <motion.ol
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative list-none"
    >
      {items.map((item, i) => (
        <motion.li
          key={item.organisation}
          variants={fadeUp}
          className={`relative grid gap-3 border-l pb-14 pl-8 last:pb-0 sm:pl-12 lg:grid-cols-[220px_1fr] lg:gap-10 ${
            isLight ? "border-white/15" : "border-line"
          }`}
        >
          {/* Node */}
          <span
            aria-hidden="true"
            className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
              i === 0
                ? "border-gold bg-gold"
                : isLight
                  ? "border-white/40 bg-navy"
                  : "border-navy/30 bg-offwhite"
            }`}
          />
          <div>
            <p className="eyebrow text-gold">{item.period}</p>
          </div>
          <div>
            <h3
              className={`font-serif text-2xl leading-snug tracking-tight sm:text-[1.7rem] ${
                isLight ? "text-white" : "text-navy"
              }`}
            >
              {item.organisation}
            </h3>
            <p
              className={`mt-1 text-sm font-semibold uppercase tracking-[0.12em] ${
                isLight ? "text-white/50" : "text-deep"
              }`}
            >
              {item.role}
            </p>
            <p
              className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${
                isLight ? "text-white/60" : "text-mist"
              }`}
            >
              {item.description}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
