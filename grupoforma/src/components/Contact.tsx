import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Informações de Contato */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Vamos conversar?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Tem alguma dúvida ou quer agendar uma visita? Entre em contato
              através dos nossos canais de atendimento ou venha tomar um café
              conosco. Estamos prontos para impulsionar o seu negócio.
            </p>

            <div className="space-y-8">
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

              {/* Endereço */}
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

          {/* Mapa do Google Maps Embutido */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-full min-h-[400px] flex">
            <iframe
              src="https://maps.google.com/maps?q=Grupo%20Forma,%20R.%20Carlos%20Domingues%20Tantico,%20192,%20Itapecerica%20da%20Serra&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, flexGrow: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do Grupo Forma"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
