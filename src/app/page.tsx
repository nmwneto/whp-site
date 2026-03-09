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
export default function Home() {
  return (
    <>
      <NavbarWHP />
      <Hero />
      <Logos />
      <Stats />
      <Services />
      <CtaBanner />
      <Portfolio />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}
