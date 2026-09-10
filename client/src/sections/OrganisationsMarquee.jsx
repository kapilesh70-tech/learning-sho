import { organisations } from "../data/content";

/**
 * Infinite scrolling strip of organisations from the career profile.
 * Pauses on hover; falls back to a static row with reduced motion.
 */
export default function OrganisationsMarquee() {
  const row = [...organisations, ...organisations];

  return (
    <section
      aria-label="Selected organisations from a 34-year career"
      className="marquee-wrap border-b border-line bg-white py-10"
    >
      <p className="eyebrow mb-7 text-center text-mist">
        Selected organisations across a 34-year career
      </p>
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
        />
        <div className="animate-marquee flex w-max items-center">
          {row.map((org, i) => (
            <span
              key={`${org}-${i}`}
              aria-hidden={i >= organisations.length}
              className="flex items-center whitespace-nowrap"
            >
              <span className="px-8 font-serif text-xl tracking-tight text-navy/70 sm:text-2xl">
                {org}
              </span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-gold"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
