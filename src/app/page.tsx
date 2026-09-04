import NavbarWHP from "@/components/NavbarWHP";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/schema";

const HOME_DESCRIPTION =
  "Agência de marketing digital que une estratégia, design e tecnologia para fazer sua marca crescer: identidade visual, sites, SEO e social media.";

export default function Home() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "WHP — Agência de Marketing Digital, Design e Tecnologia", description: HOME_DESCRIPTION, path: "/" })} />
      <NavbarWHP />
      <main id="conteudo">
      <Hero />
      <Logos />
      <Stats />
      <Services />
      <CtaBanner />
      <Portfolio />
      <Team />
      <Testimonials />
      </main>
      <Footer />
    </>
  );
}
