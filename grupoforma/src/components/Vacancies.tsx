import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

// Adicionamos a propriedade "link" em cada vaga para apontar para a Selecty
const jobs = [
  {
    title: "Analista de RH",
    location: "Itapecerica da Serra - SP",
    type: "Presencial",
    link: "https://grupoforma.selecty.com.br/",
  },
  {
    title: "Assistente Administrativo",
    location: "São Paulo - SP",
    type: "Híbrido",
    link: "https://grupoforma.selecty.com.br/",
  },
  {
    title: "Gerente de Projetos",
    location: "Remoto",
    type: "Remoto",
    link: "https://grupoforma.selecty.com.br/",
  },
];

export function Vacancies() {
  return (
    <section id="vagas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Vagas em Destaque
          </h2>
          <p className="text-gray-600 text-lg">
            Confira nossas oportunidades abertas e venha fazer parte do time.
          </p>
        </div>

        {/* Grid de Vagas Específicas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-950 mb-4">
                {job.title}
              </h3>
              <div className="space-y-2 mb-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" /> {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" /> {job.type}
                </div>
              </div>
              {/* O href agora puxa o link da vaga diretamente do array */}
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
              >
                Ver detalhes <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Banner Geral - Envie seu Currículo (Banco de Talentos) */}
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          {/* Fundo decorativo */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-800 rounded-full opacity-50 blur-2xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-blue-200" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não encontrou a vaga ideal?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Estamos sempre em busca de novos talentos. Envie seu currículo
              para o nosso banco de dados e candidate-se para oportunidades
              futuras.
            </p>
            <a
              href="https://grupoforma.selecty.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-950 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Envie o seu Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
