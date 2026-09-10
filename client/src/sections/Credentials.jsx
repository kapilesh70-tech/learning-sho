import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { credentials } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

export default function Credentials({ tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <section
      className={`py-24 sm:py-32 ${isLight ? "bg-navy" : "bg-offwhite border-t border-line"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            eyebrow="Professional Development"
            title={["Continuous learning", "behind the consulting."]}
            intro="A combination of formal development, professional certifications and continuous exploration of leadership, neuroscience, AI and learning technologies."
            tone={tone === "light" ? "light" : "dark"}
          />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="list-none self-center"
          >
            {credentials.map((credential) => (
              <motion.li
                key={credential}
                variants={fadeUp}
                className={`flex items-baseline gap-5 border-b py-5 ${
                  isLight ? "border-white/10" : "border-line"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-sm text-gold"
                >
                  —
                </span>
                <span
                  className={`text-[15px] leading-relaxed ${
                    isLight ? "text-white/75" : "text-navy"
                  }`}
                >
                  {credential}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
