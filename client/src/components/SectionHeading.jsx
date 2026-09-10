import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";

/**
 * Editorial section header: eyebrow label, serif headline, optional intro.
 * tone: "dark" (navy text, light ground) | "light" (white text, dark ground)
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
}) {
  const titleLines = Array.isArray(title) ? title : [title];
  const isLight = tone === "light";

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={`eyebrow mb-5 ${isLight ? "text-gold" : "text-deep"}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem] ${
          isLight ? "text-white" : "text-navy"
        }`}
      >
        {titleLines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`mt-6 max-w-2xl text-[17px] leading-relaxed ${
            isLight ? "text-white/60" : "text-mist"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
