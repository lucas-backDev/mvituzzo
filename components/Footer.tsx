export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url('/placeholder.svg?height=600&width=1920')`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Seções do Carlos Alberto e Partner - lado a lado sem fundo branco */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Seção esquerda - Carlos Alberto */}
            <div className="flex flex-col items-center text-center space-y-4">
              <img src="/carlos-foto.png" alt="Carlos Alberto" className="w-32 h-32 rounded-full shadow-lg" />
              <img src="/carlos-alberto-text.png" alt="Carlos Alberto" className="h-8 w-auto" />
              <img src="/creci-text.png" alt="CRECI 176.642F" className="h-6 w-auto" />
            </div>

            {/* Seção direita - Partner e Logo */}
            <div className="flex flex-col items-center text-center space-y-6">
              <img src="/partner-text.png" alt="Partner" className="h-10 w-auto" />
              <img src="/mvituzzo-logo-footer.png" alt="M Vituzzo Empreendimentos" className="h-16 w-auto" />
            </div>
          </div>
        </div>

        {/* Textos legais */}
        <div className="text-center space-y-6">
          <p className="text-black text-sm max-w-3xl mx-auto font-medium">
            Imagens ilustrativas. Material preliminar de pesquisa de mercado sujeito a alteração sem aviso prévio.
          </p>

          <div className="text-black text-sm space-y-1">
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
