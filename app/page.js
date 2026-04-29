// app/page.js
import Hero from "@/components/home/Hero";
import ValueStrip from "@/components/home/ValueStrip";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import FocusAreas from "@/components/home/FocusAreas";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const App = () => {
  return (
    <>
      <Hero />
      <ValueStrip />
      <About />
      <Services />
      <HowItWorks />
      <FocusAreas />
      <Testimonials />
      <CTA />
    </>
  );
};

export default App;
