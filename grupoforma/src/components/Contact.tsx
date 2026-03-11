import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Vamos conversar?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Preencha o formulário ou entre em contato através dos nossos
              canais de atendimento. Estamos prontos para impulsionar o seu
              negócio.
            </p>

            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefone</h4>
                  <a
                    href="tel:+551146679338"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +55 (11) 4667-9338
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">E-mail</h4>
                  <a
                    href="mailto:comercial@grupoforma.com.br"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    comercial@grupoforma.com.br
                  </a>
                </div>
              </div>

              {/* Endereço Resumido com Link Completo para o Maps */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=R.+Carlos+Domingues+Tantico,+192+-+Jardim+Tereza+Maria,+Itapecerica+da+Serra+-+SP,+06850-670"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors leading-relaxed block"
                  >
                    R. Carlos Domingues Tantico, 192
                    <br />
                    Itapecerica da Serra - SP
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Como podemos ajudar?
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Descreva sua necessidade..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
