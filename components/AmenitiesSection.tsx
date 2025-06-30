export default function AmenitiesSection() {
  return (
    <>
      <section
        className="py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$ngvby5siqhi')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          {/* Título principal */}
          <div className="mb-16">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$dmlpi70az09"
              alt="Lazer e Comodidades"
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>

          {/* Grid de amenidades */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Coluna esquerda */}
            <div className="space-y-8">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$a4mjkhc93co"
                alt="Amenidade 1"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$2ivmrq8axsv"
                alt="Ícone 1"
                className="w-20 h-auto mx-auto"
              />
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$9tnptmvuv7q"
                alt="Amenidade 2"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$ezog1zu4b2o"
                alt="Ícone 2"
                className="w-32 h-auto mx-auto"
              />
            </div>

            {/* Coluna direita */}
            <div className="space-y-8">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$gnu7xhm4psc"
                alt="Amenidade 3"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$x9vf36yfm9"
                alt="Ícone 3"
                className="w-16 h-auto mx-auto"
              />
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$p6i2ubrnh1"
                alt="Amenidade 4"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/712823/1750704771/$19v1qy83wpp"
                alt="Ícone 4"
                className="w-32 h-auto mx-auto"
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
    </>
  )
}
