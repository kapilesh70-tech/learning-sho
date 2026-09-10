import { motion } from "framer-motion";
import Seo from "../lib/Seo";
import { personSchema, breadcrumbSchema } from "../lib/schema";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import Credentials from "../sections/Credentials";
import CTA from "../components/CTA";
import {
  careerHistory,
  expertise,
  organisations,
  moreOrganisations,
} from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";
import stageImage from "../assets/kapilesh-stage.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Experience", path: "/experience" },
    ]),
  ],
};

export default function Experience() {
  return (
    <>
      <Seo
        title="34+ Years of Experience"
        description="From sales leadership at GlaxoSmithKline to enterprise capability building at RSPL Group — one continuous journey of building capability across industries."
        path="/experience"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Career Journey"
        title={[
          "34+ years.",
          "One continuous journey",
          "of building capability.",
        ]}
        intro="A career progression that provides both commercial understanding and deep expertise in people development — from frontline sales to enterprise-wide L&D leadership."
      />

      {/* TIMELINE */}
      <section className="bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The Journey"
            title={["From sales leadership to", "enterprise capability building."]}
          />
          <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <Timeline items={careerHistory} />
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden self-start lg:sticky lg:top-32 lg:block"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/40"
              />
              <div className="img-frame relative overflow-hidden border border-line">
                <img
                  src={stageImage}
                  alt="Kapilesh — a career built on presence and practice"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-[45%_20%] transition-transform duration-[2500ms] ease-out hover:scale-[1.04]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="bg-navy py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <SectionHeading
              eyebrow="Core Expertise"
              title={["Depth across the", "capability agenda."]}
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

      {/* SELECTED ORGANISATIONS */}
      <section className="border-b border-line bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Selected Organisations"
            title={["Trusted across industries", "and organisations."]}
            intro="Kapilesh has worked across FMCG, healthcare, manufacturing, telecom, banking, retail, automobile, power, education, government and financial services."
          />
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-14 flex list-none flex-wrap gap-3"
          >
            {organisations.map((org) => (
              <motion.li
                key={org}
                variants={fadeUp}
                className="border border-line bg-white px-5 py-2.5 text-[13.5px] font-medium tracking-wide text-navy"
              >
                {org}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 max-w-3xl text-sm leading-relaxed text-mist"
          >
            {moreOrganisations}
          </motion.p>
        </div>
      </section>

      {/* PROFESSIONAL DEVELOPMENT & CREDENTIALS */}
      <Credentials tone="dark" />

      <CTA
        eyebrow="Put this experience to work"
        title={["Every engagement carries", "34 years of context."]}
        body="Cross-industry, cross-functional experience means your challenge is rarely seen for the first time."
        buttonLabel="Work With Kapilesh"
      />
    </>
  );
}
