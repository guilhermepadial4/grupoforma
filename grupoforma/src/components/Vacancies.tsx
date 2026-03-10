import { MapPin, Briefcase, ArrowRight } from "lucide-react";

// DADOS DE EXEMPLO - Substitua pelos dados reais depois
const vagasRecentes = [
  { cargo: "Analista de RH Sênior", local: "São Paulo, SP", tipo: "CLT" },
  { cargo: "Assistente Administrativo", local: "Campinas, SP", tipo: "CLT" },
  { cargo: "Gerente de Projetos", local: "Híbrido", tipo: "PJ" },
];

export function Vacancies() {
  return (
    <section id="vagas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Vagas em Destaque
            </h2>
            <p className="text-gray-600 text-lg">
              Faça parte de grandes equipes. Confira nossas oportunidades mais
              recentes.
            </p>
          </div>
          {/* Trocado para <a> apontando para o portal */}
          <a
            href="https://grupoforma.selecty.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2"
          >
            Ver todas as vagas <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid gap-4">
          {vagasRecentes.map((vaga, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vaga.cargo}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {vaga.local}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {vaga.tipo}
                  </span>
                </div>
              </div>
              {/* Trocado para <a> apontando para o portal */}
              <a
                href="https://grupoforma.selecty.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors w-full md:w-auto text-center inline-block"
              >
                Candidatar-se
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
