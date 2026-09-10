import { motion } from "framer-motion";
import { fadeUp, viewport } from "../lib/motion";

/**
 * Editorial pull-quote. Used for the founder's own words —
 * no invented client testimonials.
 */
export default function Testimonial({ quote, attribution, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <motion.blockquote
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative border-l-2 border-gold pl-8 sm:pl-10"
    >
      <p
        className={`font-serif text-2xl leading-[1.35] tracking-tight sm:text-[2rem] ${
          isLight ? "text-white" : "text-navy"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer
          className={`eyebrow mt-7 ${isLight ? "text-white/50" : "text-mist"}`}
        >
          — {attribution}
        </footer>
      )}
    </motion.blockquote>
  );
}
