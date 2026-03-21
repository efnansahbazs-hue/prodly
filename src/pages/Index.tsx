import { NoiseOverlay, DotGrid, Orbs } from "@/components/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatProdlyDoes } from "@/components/WhatProdlyDoes";
import { DemoWidget } from "@/components/DemoWidget";
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
import { ProdlySpin } from "@/components/ProdlySpin";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingReportButton } from "@/components/FloatingReportButton";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <NoiseOverlay />
    <DotGrid />
    <Orbs />
    <Navbar />
    <Hero />
    <WhatProdlyDoes />
    <DemoWidget />
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

    {/* Prodly Spin section */}
    <section className="py-20 px-5">
      <div className="container mx-auto max-w-lg">
        <ScrollReveal>
          <ProdlySpin />
        </ScrollReveal>
      </div>
    </section>

    <FinalCTA />
    <Footer />
    <FloatingReportButton />
  </div>
);

export default Index;
