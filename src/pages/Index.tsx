import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DemoWidget } from "@/components/DemoWidget";
import { SocialProof } from "@/components/SocialProof";
import { Features } from "@/components/Features";
import { Toolkit } from "@/components/Toolkit";
import { BlankPageSection } from "@/components/BlankPageSection";
import { ProblemSolver } from "@/components/ProblemSolver";
import { DailyTechnique } from "@/components/DailyTechnique";
import { StreakShowcase } from "@/components/StreakShowcase";
import { GenreShowcase } from "@/components/GenreShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingReportButton } from "@/components/FloatingReportButton";

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
    <BlankPageSection />
    <ProblemSolver />
    <DailyTechnique />
    <StreakShowcase />
    <GenreShowcase />
    <HowItWorks />
    <Testimonials />
    <Pricing />
    <FinalCTA />
    <Footer />
    <FloatingReportButton />
  </div>
);

export default Index;
