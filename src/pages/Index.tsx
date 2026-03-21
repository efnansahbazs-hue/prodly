import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DemoWidget } from "@/components/DemoWidget";
import { SocialProof } from "@/components/SocialProof";
import { Features } from "@/components/Features";
import { Toolkit } from "@/components/Toolkit";
import { BlankPageSection } from "@/components/BlankPageSection";
import { GenreShowcase } from "@/components/GenreShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <NoiseOverlay />
    <DotGrid />
    <Orbs />
    <Navbar />
    <Hero />
    <DemoWidget />
    <SocialProof />
    <Features />
    <Toolkit />
    <GenreShowcase />
    <HowItWorks />
    <Testimonials />
    <Pricing />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
