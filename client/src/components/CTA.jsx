import { motion } from "framer-motion";
import Button from "./Button";
import { fadeUp, stagger, viewport } from "../lib/motion";

/**
 * Full-width closing call-to-action band on navy.
 */
export default function CTA({
  eyebrow = "Start a conversation",
  title,
  body,
  buttonLabel = "Start a Conversation",
  buttonTo = "/contact",
}) {
  const titleLines = Array.isArray(title) ? title : [title];
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Fine gold rule across the top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12"
      >
        <motion.p variants={fadeUp} className="eyebrow text-gold">
          {eyebrow}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-6xl"
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h2>
        {body && (
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-white/60"
          >
            {body}
          </motion.p>
        )}
        <motion.div variants={fadeUp} className="mt-12">
          <Button to={buttonTo} variant="solid">
            {buttonLabel}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
