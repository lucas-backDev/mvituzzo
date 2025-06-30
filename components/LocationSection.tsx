export default function LocationSection() {
  return (
    <>
      <section className="bg-[#00313b] py-16">
        <div className="container mx-auto px-4">
          {/* Imagem principal */}
          <div className="text-center mb-16">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$4wk5elfg0vv"
              alt="Localização"
              className="w-full max-w-4xl mx-auto h-auto"
            />
          </div>

          {/* Grid de imagens */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$ekaqrmxsms')`,
              }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$wl5d8tw4v2j')`,
              }}
            ></div>
          </div>

          {/* Textos informativos */}
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="text-white">
              <h3 className="text-[#c6b597] text-xl md:text-2xl font-bold mb-4">Onde a tradição encontra o novo.</h3>
              <p className="text-white">
                Em um dos bairros mais tradicionais de São José dos Campos, cada rua carrega história e a cultura pulsa
                em cada esquina: aqui nasce o Art Paisage.
              </p>
            </div>
            <div className="text-white">
              <h3 className="text-[#c6b597] text-xl md:text-2xl font-bold mb-4">Viver bem, perto de tudo!</h3>
              <p className="text-white">
                A poucos minutos do Centro e do CenterVale Shopping, cercado por escolas, unidades de saúde, centros
                culturais e áreas de lazer.
              </p>
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
    </>
  )
}
