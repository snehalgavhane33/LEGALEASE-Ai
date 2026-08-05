import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import UseCases from "../components/UseCases/UseCases";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks/>
      <UseCases/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <About />
      <Contact />
      
      
      <Footer />
    </>
  );
}

export default Home;