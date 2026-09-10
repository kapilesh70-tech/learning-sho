import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { philosophy } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";
import profileImage from "../assets/kapilesh-profile.jpg";

export default function Philosophy() {
  return (
    <section className="overflow-hidden bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title={philosophy.headline}
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-10 space-y-6"
            >
              {philosophy.body.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="max-w-xl text-[16px] leading-relaxed text-mist"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Editorial image with overlapping quote card */}
          <div className="relative self-center pb-20 lg:pb-24">
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="img-frame relative overflow-hidden border border-line"
            >
              <img
                src={profileImage}
                alt="Kapilesh in a reflective moment"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover object-[45%_25%] transition-transform duration-[2500ms] ease-out hover:scale-[1.04]"
              />
            </motion.div>
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="absolute -bottom-2 left-5 right-5 border-l-2 border-gold bg-navy p-7 shadow-2xl shadow-navy/30 sm:left-10 sm:right-auto sm:max-w-md sm:p-9"
            >
              <p className="font-serif text-xl leading-[1.4] tracking-tight text-white sm:text-[1.35rem]">
                &ldquo;{philosophy.quote}&rdquo;
              </p>
              <footer className="eyebrow mt-5 text-gold">
                — {philosophy.quoteAttribution}
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
