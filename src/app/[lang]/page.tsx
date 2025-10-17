import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { AboutPreviewSection } from "@/components/about-preview-section"
import { SolutionsPreviewSection } from "@/components/solutions-preview-section"
import { PartnersSection } from "@/components/partners-section"
import { ProjectsSection } from "@/components/projects-section"
import { IndustriesSection } from "@/components/industries-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqPreviewSection } from "@/components/faq-preview-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OurWorkSection } from "@/components/our-work-section"
import { NewsSection } from "@/components/news-section"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <AboutPreviewSection />
            <StatsSection />
            <OurWorkSection />
            <ServicesSection />
            <IndustriesSection />
            <ProjectsSection />
            {/* <NewsSection /> */}
            <PartnersSection />
            <WhyChooseSection />
            {/* <TestimonialsSection /> */}
            <FaqPreviewSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
