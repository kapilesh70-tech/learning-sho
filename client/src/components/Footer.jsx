import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";
import { brand, contact, navigation, services } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-tight">
              Kapilesh <span className="text-gold">Learning</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Leadership.
              <br />
              Capability.
              <br />
              Transformation.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="eyebrow mb-6 text-gold">Navigation</p>
            <ul className="space-y-3.5">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solutions */}
          <div>
            <p className="eyebrow mb-6 text-gold">Solutions</p>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/solutions#${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="eyebrow mb-6 text-gold">Connect</p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:+${contact.phoneRaw}`}
                  className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone size={15} aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Linkedin size={15} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <p className="eyebrow !text-[10px] text-white/30">
            {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
