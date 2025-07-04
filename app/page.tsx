"use client"

import { useEffect, useState } from "react"
import WhatsAppButton from "@/components/WhatsAppButton"
import HeroSection from "@/components/HeroSection"
import ConceptSection from "@/components/ConceptSection"
import LocationSection from "@/components/LocationSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import PlansSection from "@/components/PlansSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useEffect(() => {
    // Verificar se há parâmetro de sucesso na URL
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("success") === "true") {
      setShowSuccessMessage(true)
      // Remover o parâmetro da URL
      window.history.replaceState({}, document.title, window.location.pathname)

      // Ocultar mensagem após 5 segundos
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Mensagem de sucesso */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white text-center py-4 z-50">
          <p className="font-bold">✅ Cadastro realizado com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}

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
