import WhatsAppButton from "@/components/WhatsAppButton"
import HeroSection from "@/components/HeroSection"
import ConceptSection from "@/components/ConceptSection"
import LocationSection from "@/components/LocationSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import PlansSection from "@/components/PlansSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WhatsAppButton />
      <HeroSection />
      <ConceptSection />
      <LocationSection />
      <AmenitiesSection />
      <PlansSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
