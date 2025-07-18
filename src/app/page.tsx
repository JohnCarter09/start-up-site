import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Logos from "@/components/sections/logos";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <TestimonialsCarousel />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
