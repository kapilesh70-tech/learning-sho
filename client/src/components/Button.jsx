import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * Editorial button system.
 * variant: "solid" (gold), "outline" (fine border), "link" (arrow text link)
 * tone: "dark" for use on light grounds, "light" for use on dark grounds
 */
export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "solid",
  tone = "light",
  children,
  className = "",
  disabled = false,
}) {
  const base =
    "group inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

  const styles = {
    solid:
      "bg-gold px-7 py-4 text-navy hover:bg-gold-soft focus-visible:bg-gold-soft",
    outline:
      tone === "light"
        ? "border border-white/30 px-7 py-4 text-white hover:border-gold hover:text-gold"
        : "border border-navy/25 px-7 py-4 text-navy hover:border-gold hover:text-deep",
    link:
      tone === "light"
        ? "text-gold hover:gap-4"
        : "text-deep hover:gap-4",
  };

  const cls = `${base} ${styles[variant]} ${className}`;
  const Icon = variant === "link" ? ArrowRight : ArrowUpRight;
  const icon = (
    <Icon
      size={14}
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px"
      aria-hidden="true"
    />
  );

  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
        {icon}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
      {icon}
    </button>
  );
}
