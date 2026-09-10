import Seo from "../lib/Seo";
import {
  organizationSchema,
  professionalServiceSchema,
} from "../lib/schema";
import HomeHero from "../sections/HomeHero";
import TrustSection from "../sections/TrustSection";
import OrganisationsMarquee from "../sections/OrganisationsMarquee";
import Philosophy from "../sections/Philosophy";
import Solutions from "../sections/Solutions";
import Process from "../sections/Process";
import ExperiencePreview from "../sections/ExperiencePreview";
import Programs from "../sections/Programs";
import Industries from "../sections/Industries";
import FinalCTA from "../sections/FinalCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, professionalServiceSchema],
};

export default function Home() {
  return (
    <>
      <Seo
        title="Leadership, Capability & Organisational Transformation"
        description="Kapilesh Learning helps organisations build leadership capability, strengthen learning systems and translate people development into business performance. 34+ years of experience, 20,000+ professionals developed."
        path="/"
        jsonLd={jsonLd}
      />
      <HomeHero />
      <TrustSection />
      <OrganisationsMarquee />
      <Philosophy />
      <Solutions />
      <Process />
      <ExperiencePreview />
      <Programs />
      <Industries />
      <FinalCTA />
    </>
  );
}
