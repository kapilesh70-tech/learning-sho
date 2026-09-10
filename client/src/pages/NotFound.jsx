import Seo from "../lib/Seo";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <PageHero
        eyebrow="404"
        title={["This page", "doesn't exist."]}
        intro="The page you're looking for may have moved. Let's get you back on track."
      />
      <section className="bg-navy pb-32 text-center">
        <Button to="/" variant="solid">
          Back to Home
        </Button>
      </section>
    </>
  );
}
