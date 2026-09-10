import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { careerHistory } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

export default function ExperiencePreview() {
  return (
    <section className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Experience"
              title={["34+ years of", "building capability."]}
              intro="A career that moved from frontline sales leadership to enterprise-wide learning and capability building — commercial understanding first, people development built on top of it."
            />
            <div className="mt-10">
              <Button to="/experience" variant="link" tone="dark">
                View Full Experience
              </Button>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="divide-y divide-line border-y border-line"
          >
            {careerHistory.map((item) => (
              <motion.div
                key={item.organisation}
                variants={fadeUp}
                className="grid gap-1.5 py-7 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <p className="eyebrow pt-1 text-gold">{item.period}</p>
                <div>
                  <h3 className="font-serif text-xl tracking-tight text-navy">
                    {item.organisation}
                  </h3>
                  <p className="mt-1 text-sm text-mist">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
