import { brand, contact } from "../data/content";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.siteUrl,
  slogan: brand.tagline,
  email: contact.email,
  telephone: contact.phoneDisplay,
  sameAs: [contact.linkedin],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kapilesh",
  jobTitle: "Learning & Development and Organisational Capability Consultant",
  worksFor: { "@type": "Organization", name: brand.name },
  url: `${brand.siteUrl}/about`,
  sameAs: [contact.linkedin],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  description: brand.positioning,
  url: brand.siteUrl,
  email: contact.email,
  telephone: contact.phoneDisplay,
  areaServed: "IN",
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${brand.siteUrl}${item.path}`,
    })),
  };
}
