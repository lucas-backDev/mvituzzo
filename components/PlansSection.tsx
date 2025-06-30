export default function PlansSection() {
  return (
    <>
      <section
        className="py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$hpxlzxpy5e')`,
        }}
      >
        <div className="container mx-auto px-4">
          {/* Título */}
          <div className="text-center mb-16">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750859744/$q39eyhlvj88"
              alt="Plantas e Opções"
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>

          {/* Grid de plantas */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750859744/$lw9umhslkwo"
                alt="Planta Apartamento"
                className="w-full h-auto rounded-lg mb-8"
              />
            </div>
            <div className="text-center">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750859744/$hizocupir58"
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
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$5unl4ty916r"
              alt="Planta 1"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$810t11voio3"
              alt="Planta 2"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$j1j9voctf9l"
              alt="Planta 3"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$l7muvmp69p9"
              alt="Planta 4"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$len1tha38y"
              alt="Planta 5"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$h2cmlrdj0om"
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
