import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../lib/motion";

/**
 * Editorial solution row — large number, serif title, hairline dividers,
 * arrow revealed on hover. Deliberately not a "card".
 */
export default function ServiceCard({ service, to = "/solutions" }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={`${to}#${service.slug}`}
        className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-t border-line py-8 transition-colors duration-300 hover:bg-white sm:gap-10 sm:py-10 lg:grid-cols-[90px_1fr_1.2fr_auto]"
      >
        <span className="font-serif text-sm text-gold transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-base">
          {service.number}
        </span>
        <h3 className="font-serif text-2xl leading-snug tracking-tight text-navy transition-colors duration-300 group-hover:text-deep sm:text-3xl">
          {service.title}
        </h3>
        <p className="col-span-2 max-w-xl text-[15px] leading-relaxed text-mist sm:col-span-1 lg:col-span-1">
          {service.summary}
        </p>
        <span className="hidden text-navy/30 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-gold lg:block">
          <ArrowRight size={22} aria-hidden="true" />
        </span>
      </Link>
    </motion.div>
  );
}
