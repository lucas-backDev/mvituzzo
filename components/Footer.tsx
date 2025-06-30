export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url('https://d335luupugsy2.cloudfront.net/cms/files/712823/1706192993/$f5z2kbktzdw')`,
      }}
    >
      <div className="container mx-auto px-6 md:px-4">
        {/* Seções do Carlos Alberto e Partner - lado a lado sem fundo branco */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Seção esquerda - Carlos Alberto */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src="/carlos-foto.png"
                alt="Carlos Alberto"
                className="w-48 h-48 rounded-full shadow-lg object-cover"
              />
              <img src="/carlos-alberto.png" alt="Carlos Alberto" className="h-8 w-auto max-w-xs" />
              <img src="/creci.png" alt="CRECI 176.642F" className="h-6 w-auto max-w-xs" />
            </div>

            {/* Seção direita - Partner e Logo */}
            <div className="flex flex-col items-center text-center space-y-6 px-4">
              <img src="/partner.png" alt="Partner" className="h-7 w-auto max-w-xs" />
              <img
                src="/mvituzzo-logo-footer.png"
                alt="M Vituzzo Empreendimentos"
                className="h-32 w-auto max-w-full px-2"
              />
            </div>
          </div>
        </div>

        {/* Textos legais */}
        <div className="text-center space-y-6 px-4">
          <p className="text-black text-sm max-w-3xl mx-auto font-medium px-2">
            Imagens ilustrativas. Material preliminar de pesquisa de mercado sujeito a alteração sem aviso prévio.
          </p>

          <div className="text-black text-sm space-y-1 px-2">
            <p className="font-bold">Autor do projeto:</p>
            <p>Denise Liberato Campoy</p>
            <p>CAU: A16002-4</p>
            <p>Inscrição Municipal: 082068/02</p>
            <p>Cep: 12.245-010</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
