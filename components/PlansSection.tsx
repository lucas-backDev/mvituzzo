export default function PlansSection() {
  return (
    <>
      <section
        className="py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1200&width=1920')`,
        }}
      >
        <div className="container mx-auto px-4">
          {/* Título */}
          <div className="text-center mb-16">
            <img
              src="/placeholder.svg?height=150&width=511"
              alt="Plantas e Opções"
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>

          {/* Grid de plantas */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=600&width=940"
                alt="Planta Apartamento"
                className="w-full h-auto rounded-lg mb-8"
              />
            </div>
            <div className="text-center">
              <img
                src="/placeholder.svg?height=400&width=460"
                alt="Render Apartamento"
                className="w-full h-auto rounded-lg"
              />
            </div>
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

      {/* Seção de plantas detalhadas */}
      <section className="bg-[#00313b] py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <img
              src="/placeholder.svg?height=600&width=940"
              alt="Planta 1"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="/placeholder.svg?height=600&width=940"
              alt="Planta 2"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="/placeholder.svg?height=600&width=940"
              alt="Planta 3"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="/placeholder.svg?height=600&width=940"
              alt="Planta 4"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="/placeholder.svg?height=600&width=940"
              alt="Planta 5"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="/placeholder.svg?height=600&width=940"
              alt="Planta 6"
              className="w-full max-w-4xl mx-auto h-auto"
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
