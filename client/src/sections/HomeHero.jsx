import { motion, useReducedMotion } from "framer-motion";
import Button from "../components/Button";
import { fadeUp, fade, stagger } from "../lib/motion";
import portrait from "../assets/kapilesh-portrait.jpg";

export default function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Atmosphere: fine grid + living colour glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -right-52 top-10 h-[560px] w-[560px] rounded-full bg-deep/30 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[150px]"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:pb-36">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="eyebrow text-gold">
            Leadership &bull; Capability &bull; Transformation
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-7 font-serif text-[3rem] leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[5rem]"
          >
            <span className="block">Building people</span>
            <span className="block">
              who build{" "}
              <em className="gradient-text not-italic">better</em>
            </span>
            <span className="block">organisations.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-xl text-[17px] leading-relaxed text-white/60"
          >
            Kapilesh Learning helps organisations build leadership capability,
            strengthen learning systems and translate people development into
            business performance.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="solid">
              Work With Kapilesh
            </Button>
            <Button to="/solutions" variant="link" tone="light">
              Explore Solutions
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual: authentic portrait with editorial frame */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto"
        >
          <div className="relative aspect-[4/5]">
            {/* Offset gold frame + glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/40"
            />
            <div
              aria-hidden="true"
              className="animate-glow absolute -inset-10 rounded-full bg-royal/20 blur-3xl"
            />
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              className="img-frame relative h-full w-full overflow-hidden border border-white/10"
            >
              <img
                src={portrait}
                alt="Kapilesh — founder of Kapilesh Learning"
                className="h-full w-full object-cover object-[38%_18%] transition-transform duration-[2500ms] ease-out hover:scale-[1.04]"
                fetchpriority="high"
              />
              <p className="eyebrow absolute bottom-5 left-6 z-10 !text-[10px] text-white/80">
                Kapilesh — Founder, Kapilesh Learning
              </p>
            </motion.div>

            {/* Floating data cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className={`absolute -left-4 top-12 border border-white/10 bg-navy-soft/95 px-6 py-5 shadow-2xl shadow-black/40 backdrop-blur sm:-left-14 ${
                reduceMotion ? "" : "animate-float"
              }`}
            >
              <p className="font-serif text-4xl text-gold">34+</p>
              <p className="eyebrow mt-1.5 !text-[10px] text-white/50">Years</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={`absolute -bottom-8 -left-2 border border-white/10 bg-navy-soft/95 px-6 py-5 shadow-2xl shadow-black/40 backdrop-blur sm:-left-10 ${
                reduceMotion ? "" : "animate-float-delayed"
              }`}
            >
              <p className="font-serif text-4xl text-gold">20,000+</p>
              <p className="eyebrow mt-1.5 !text-[10px] text-white/50">
                Professionals developed
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
