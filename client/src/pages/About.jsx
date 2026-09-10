import { motion } from "framer-motion";
import Seo from "../lib/Seo";
import { personSchema, breadcrumbSchema } from "../lib/schema";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Testimonial from "../components/Testimonial";
import Credentials from "../sections/Credentials";
import CTA from "../components/CTA";
import { philosophy, expertise } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";
import frontImage from "../assets/kapilesh-front.jpg";
import iimaImage from "../assets/kapilesh-iima.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ],
};

export default function About() {
  return (
    <>
      <Seo
        title="About Kapilesh"
        description="Kapilesh is a Learning & Development and organisational capability leader with 34+ years of experience across leadership, sales, learning and transformation."
        path="/about"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="About Kapilesh"
        title={[
          "Experience builds perspective.",
          "Perspective builds better leaders.",
        ]}
        intro="A learning leader with a strong business foundation — 34+ years across sales leadership, learning & development and organisational transformation."
      />

      {/* WHO IS KAPILESH */}
      <section className="bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-last lg:order-first"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 -translate-y-3 border border-gold/40"
              />
              <div className="img-frame relative overflow-hidden border border-line">
                <img
                  src={frontImage}
                  alt="Kapilesh, founder of Kapilesh Learning"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[48%_15%] transition-transform duration-[2500ms] ease-out hover:scale-[1.04]"
                />
                <p className="eyebrow absolute bottom-5 left-6 z-10 !text-[10px] text-white/80">
                  Kapilesh — Founder
                </p>
              </div>
            </motion.div>
            <div className="lg:pt-4">
            <SectionHeading
              eyebrow="Who is Kapilesh?"
              title={["Two worlds,", "one practice."]}
              intro="Kapilesh brings together two worlds that are often disconnected: commercial reality and people development. His career spans Learning & Development, leadership development, sales leadership, talent management and organisational transformation."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-10 space-y-6"
            >
              <motion.p
                variants={fadeUp}
                className="text-[16px] leading-relaxed text-mist"
              >
                Most recently, as AVP &amp; Head of Learning &amp; Development
                at RSPL Group, he established the Training &amp; Development
                function from the ground up and led enterprise-wide L&amp;D
                across FMCG, personal care, dairy, footwear, healthcare,
                international operations, beauty services and manufacturing —
                leading and developing an L&amp;D team of approximately 50.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[16px] leading-relaxed text-mist"
              >
                Across his career he has trained and developed more than 20,000
                professionals across industries — from frontline teams to
                senior leadership.
              </motion.p>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL PHILOSOPHY */}
      <section className="border-y border-line bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <SectionHeading
              eyebrow="Professional Philosophy"
              title={["Training is an event.", "Capability is a journey."]}
              intro="The focus is simple: move beyond training events and build capability that improves leadership, behaviour, performance and business outcomes."
            />
            <div className="self-center">
              <Testimonial
                quote={philosophy.quote}
                attribution={philosophy.quoteAttribution}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FROM SALES TO LEARNING */}
      <section className="bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <SectionHeading
              eyebrow="From Sales to Learning"
              title={["A commercial", "foundation."]}
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="space-y-6 self-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-[16px] leading-relaxed text-mist"
              >
                Before moving into senior L&amp;D leadership, Kapilesh built
                his career in sales management with organisations including
                GlaxoSmithKline, Wockhardt and Dumex India — progressing from
                frontline executive to Area Business Manager and Business
                Manager, managing multi-state operations, brand launches and
                team performance.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[16px] leading-relaxed text-mist"
              >
                That commercial grounding continues to shape the approach:
                learning must be relevant to the business, practical for the
                learner and visible in performance.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & CAPABILITY — expertise */}
      <section className="bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <SectionHeading
              eyebrow="Leadership & Capability"
              title={["Core areas", "of expertise."]}
              tone="light"
            />
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid list-none gap-x-12 self-center sm:grid-cols-2"
            >
              {expertise.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-gold"
                  />
                  <span className="text-[14.5px] leading-snug text-white/75">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* CONTINUOUS LEARNING + CREDENTIALS */}
      <Credentials tone="dark" />

      {/* CONTINUOUS LEARNING IN PRACTICE — IIM Ahmedabad */}
      <section className="border-t border-line bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/40"
              />
              <div className="img-frame relative overflow-hidden border border-line">
                <img
                  src={iimaImage}
                  alt="Kapilesh at the IIM Ahmedabad campus"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-[50%_30%] transition-transform duration-[2500ms] ease-out hover:scale-[1.04]"
                />
                <p className="eyebrow absolute bottom-5 left-6 z-10 !text-[10px] text-white/80">
                  IIM Ahmedabad
                </p>
              </div>
            </motion.div>
            <SectionHeading
              eyebrow="Learning in Practice"
              title={["The learner behind", "the learning leader."]}
              intro="Five Management Development Programs at IIM Ahmedabad, professional certifications from KPMG, Thomas Assessments and TÜV SÜD — the practice is built on the same habit it teaches: continuous, deliberate learning."
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-t border-line bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p variants={fadeUp} className="eyebrow text-deep">
              Mission
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-8 font-serif text-3xl leading-[1.25] tracking-tight text-navy sm:text-4xl"
            >
              Building people who can build better organisations — through
              learning that changes the way people think, decide and act.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <CTA
        eyebrow="Work with Kapilesh"
        title={["Perspective is earned.", "Put it to work."]}
        body="Bring a capability challenge, a leadership gap or a transformation goal — the conversation starts with your business context."
        buttonLabel="Start a Conversation"
      />
    </>
  );
}
