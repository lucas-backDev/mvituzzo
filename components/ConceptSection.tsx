export default function ConceptSection() {
  return (
    <>
      {/* Primeira seção conceitual */}
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1200&width=1920')`,
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen">
            <div className="text-white">
              <p className="text-lg md:text-xl font-raleway font-bold mb-8">
                De um lado, a arte emoldura
                <br />a paisagem.
              </p>
              <div className="my-16"></div>
              <p className="text-lg md:text-xl font-raleway font-bold">
                Do outro, a paisagem inspira
                <br />a arte.
              </p>
            </div>
            <div></div>
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

      {/* Segunda seção conceitual */}
      <section
        className="min-h-screen bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1200&width=1920')`,
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen">
            <div className="text-white">
              <img src="/placeholder.svg?height=200&width=264" alt="Art Paisage" className="w-48 md:w-64 h-auto mb-8" />
              <div className="max-w-md">
                <p className="text-white mb-4">
                  Viver no <strong>Art Paisage</strong> é estar ao lado de um refúgio natural com mais de{" "}
                  <strong>1 milhão de metros quadrados de respiro</strong>, equilíbrio e liberdade.
                </p>
                <p className="text-white">
                  <strong>Mais do que localização</strong>, essa proximidade é uma extensão do conceito que dá vida ao
                  empreendimento: onde a natureza e a arte se encontram.
                </p>
              </div>
            </div>
            <div></div>
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
