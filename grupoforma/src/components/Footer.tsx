import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 border-t border-blue-900">
      <div className="container mx-auto px-4">
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Sobre a Empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Grupo Forma</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Especialistas em soluções estratégicas em Recursos Humanos,
              conectando talentos e empresas com eficiência e inovação.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Início", url: "/" },
                { name: "O Grupo", url: "#sobre" },
                { name: "Serviços", url: "#servicos" },
                { name: "Vagas", url: "#vagas" },
                { name: "Contato", url: "#contato" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="flex items-center text-blue-200 hover:text-white transition-colors text-sm group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500 group-hover:text-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Recrutamento e Seleção",
                "Terceirização de Mão de Obra",
                "Mão-de-obra Temporária Lei 6019",
                "Consultoria em RH",
                "Treinamento Corporativo",
              ].map((service, index) => (
                <li
                  key={index}
                  className="flex items-start text-blue-200 text-sm"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-500 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+551146679338"
                  className="flex items-center text-blue-200 hover:text-white transition-colors text-sm"
                >
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  +55 (11) 4667-9338
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@grupoforma.com.br"
                  className="flex items-center text-blue-200 hover:text-white transition-colors text-sm"
                >
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  comercial@grupoforma.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Carlos+Domingues+Tantico,+192+-+Itapecerica+da+Serra+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-blue-200 hover:text-white transition-colors text-sm group"
                >
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-3 shrink-0 group-hover:bg-blue-800 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    R. Carlos Domingues Tantico, 192
                    <br />
                    Itapecerica da Serra - SP
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright (Fundo do Rodapé) */}
        <div className="pt-8 border-t border-blue-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Grupo Forma - Todos os direitos
            reservados.
          </p>

          {/* Nova Seção de Créditos Minimalista com dois links */}
          <div className="flex items-center gap-3 text-blue-400/50 text-xs">
            <span>Desenvolvido com excelência</span>

            <div className="flex items-center gap-2">
              {/* Link 1: Seu LinkedIn */}
              <a
                href="https://www.linkedin.com/in/guilhermepadial/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Guilherme"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/images/dev-logo.png"
                  alt="Logo Guilherme"
                  className="h-6 w-auto"
                />
              </a>

              {/* Link 2: LinkedIn do seu Amigo */}
              <a
                href="https://www.linkedin.com/in/leonardo-lopes-lima-242042222/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Leonardo"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/images/dev2-logo.png"
                  alt="Logo Amigo"
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
