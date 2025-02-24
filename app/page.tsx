import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"
import { GetStartedSection } from "@/components/get-started-section"
import { ContactSection } from "@/components/contact-section"
import { MapSection } from "@/components/map-section"

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesSection />
      <EventsSection />
      <GallerySection />
      <BlogSection />
      <GetStartedSection />
      <FaqSection />
      <ContactSection />
      <MapSection />
    </div>
  )
}

