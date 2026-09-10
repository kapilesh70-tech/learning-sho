import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../lib/Seo";
import { professionalServiceSchema, breadcrumbSchema } from "../lib/schema";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import CTA from "../components/CTA";
import { services } from "../data/content";
import { fadeUp, stagger, viewport } from "../lib/motion";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    professionalServiceSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
    ]),
  ],
};

function DetailBlock({ label, children }) {
  return (
    <motion.div variants={fadeUp}>
      <p className="eyebrow mb-4 text-deep">{label}</p>
      {children}
    </motion.div>
  );
}

function SolutionSection({ service, index }) {
  const alt = index % 2 === 1;
  return (
    <section
      id={service.slug}
      className={`scroll-mt-24 py-24 sm:py-28 ${
        alt ? "border-y border-line bg-white" : "bg-offwhite"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Header row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-line pb-10"
          >
            <span className="font-serif text-5xl text-gold/60 sm:text-6xl">
              {service.number}
            </span>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy sm:text-5xl">
              {service.title}
            </h2>
          </motion.div>

          {/* Detail grid */}
          <div className="mt-14 grid gap-x-20 gap-y-12 lg:grid-cols-2">
            <div className="space-y-12">
              <DetailBlock label="The Challenge">
                <p className="text-[16px] leading-relaxed text-mist">
                  {service.challenge}
                </p>
              </DetailBlock>
              <DetailBlock label="Our Approach">
                <p className="text-[16px] leading-relaxed text-mist">
                  {service.approach}
                </p>
              </DetailBlock>
              <DetailBlock label="Who It Serves">
                <p className="text-[16px] leading-relaxed text-mist">
                  {service.whoItServes}
                </p>
              </DetailBlock>
            </div>

            <div className="space-y-12">
              <DetailBlock label="What We Do">
                <ul className="list-none">
                  {service.whatWeDo.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 border-b border-line py-3.5"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-gold"
                      />
                      <span className="text-[15px] text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
              <DetailBlock label="Expected Change">
                <p className="border-l-2 border-gold pl-6 font-serif text-xl leading-[1.45] text-navy">
                  {service.expectedChange}
                </p>
              </DetailBlock>
              <motion.div variants={fadeUp}>
                <Button to="/contact" variant="link" tone="dark">
                  Discuss This Challenge
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Solutions() {
  const { hash } = useLocation();

  // Deep-link support: scroll to the anchored solution after render
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      const timer = setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        120
      );
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <Seo
        title="Consulting Solutions"
        description="Six consulting solutions: L&D Strategy & Governance, Leadership Development, Organisational Transformation, Sales Excellence, Trainer & Facilitator Development and AI-Enabled Learning."
        path="/solutions"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Consulting Solutions"
        title={["Capability challenges", "require more than training."]}
        intro="Every engagement starts with the business context, the capability gap and the change that needs to happen. Six areas of practice, one philosophy: build capability, not just deliver workshops."
      />

      {/* Index of solutions */}
      <section className="border-b border-line bg-offwhite">
        <nav
          aria-label="Solutions index"
          className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-8 sm:px-8 lg:px-12"
        >
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="group inline-flex items-baseline gap-2.5 text-[13px] font-medium text-mist transition-colors hover:text-deep"
            >
              <span className="font-serif text-gold">{s.number}</span>
              <span className="border-b border-transparent group-hover:border-deep/40">
                {s.title}
              </span>
            </a>
          ))}
        </nav>
      </section>

      {services.map((service, i) => (
        <SolutionSection key={service.slug} service={service} index={i} />
      ))}

      <CTA
        eyebrow="Not sure where to start?"
        title={["Start with the challenge,", "not the solution."]}
        body="Describe what the business is trying to achieve and where capability is holding it back — the right intervention follows from there."
        buttonLabel="Start a Conversation"
      />
    </>
  );
}
