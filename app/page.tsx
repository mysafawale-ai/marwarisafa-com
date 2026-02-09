import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { DynamicContactForm } from "@/components/dynamic-contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicServicesSection } from "@/components/dynamic-services-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain: marwarisafa.com
// Brand: Marwari Safa
// Location: Rajasthan

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DynamicHeroSlider location="Rajasthan" />
      <DynamicAboutSection location="Rajasthan" />
      <DynamicContactForm location="Rajasthan" domain="marwarisafa.com" />
      <GallerySection />
      <DynamicServicesSection location="Rajasthan" domain="marwarisafa.com" />
      <DynamicFooter location="Rajasthan" domain="marwarisafa.com" />
      <WhatsAppFloat />
    </main>
  )
}
