export default function HeroSection() {
  return (
    <>
      {/* Header com logo */}
      <section className="bg-[#3aa54e] py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <img src="/placeholder.svg?height=80&width=287" alt="M Vituzzo Logo" className="h-16 md:h-20 w-auto" />
        </div>
      </section>

      {/* Hero principal */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,49,59,0.75), rgba(0,49,59,0.75)), url('/placeholder.svg?height=1200&width=1920')`,
        }}
      >
        <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center justify-center min-h-screen text-center">
          {/* Texto principal */}
          <div className="mb-8 md:mb-12">
            <div className="bg-[#3aa54e] text-white px-6 py-3 rounded-lg inline-block mb-4">
              <h1 className="text-2xl md:text-4xl font-bold font-raleway">EM BREVE | SANTANA</h1>
            </div>
            <p className="text-[#c6b597] text-lg md:text-2xl font-raleway font-bold">AO LADO DO SUPERMERCADO COOP</p>
          </div>

          {/* Logo Art Paisage */}
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=300&width=365"
              alt="Art Paisage Logo"
              className="w-64 md:w-80 h-auto mx-auto"
            />
          </div>

          {/* Ícone decorativo */}
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=88&width=88"
              alt="Decorative Icon"
              className="w-16 md:w-20 h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bg-[#3aa54e] py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <a
            href="#contact-form"
            className="bg-[#00313b] text-[#3aa54e] px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            ANTECIPE-SE AO LANÇAMENTO
          </a>
        </div>
      </section>
    </>
  )
}
