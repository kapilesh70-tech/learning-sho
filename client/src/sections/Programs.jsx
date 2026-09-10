import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { programs } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

export default function Programs() {
  return (
    <section className="border-t border-white/10 bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Signature Programs"
          title={["Learning experiences", "designed to challenge thinking."]}
          intro="Alongside customised consulting interventions, Kapilesh Learning offers practical leadership, behavioural and future-skills programs."
          tone="light"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              variants={fadeUp}
              className="group bg-charcoal p-9 transition-colors duration-300 hover:bg-navy-soft"
            >
              <p className="font-serif text-sm text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-[1.45rem] leading-snug tracking-tight text-white">
                {program.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/50">
                {program.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
