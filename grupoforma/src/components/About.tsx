import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

const valores = [
  {
    title: "Comprometimento",
    items: [
      "Executar tarefas com compromisso e responsabilidade",
      "Cumprir horários e prazos pontualmente",
      "Manter a qualidade em tudo o que faz",
      "Ser assíduo: não se ausentar sem justificativa",
      "Fazer sempre o seu melhor",
      "Cumprir a Visão, Missão e Carta de Valores",
      "Manter uma postura profissional",
      "Cumprir com aquilo que promete",
    ],
  },
  {
    title: "Trabalho em Equipe",
    items: [
      "Zelar pelo companheirismo e união da equipe",
      "Desempenhar tarefas com agilidade respeitando o fluxo",
      "Contribuir com os resultados da equipe, além do individual",
      "Ser proativo: Ajudar em todas as áreas",
      "Zelar pela limpeza e organização de todas as áreas",
    ],
  },
  {
    title: "Respeito",
    items: [
      "Reconhecer os seus erros e corrigi-los",
      "Exercitar a gratidão e ser paciente",
      "Tratar todos com a devida educação",
      "Respeitar normas da empresa e dos clientes",
      "Respeitar o espaço e os limites do outro",
      "Entregar as respostas dentro do tempo hábil",
    ],
  },
  {
    title: "Transparência & Honestidade",
    items: [
      "Ser ético e zelar sempre pela verdade",
      "Ser sincero(a) com as pessoas",
      "Falar com as pessoas e não das pessoas",
      "Manter o sigilo das informações",
    ],
  },
  {
    title: "Empatia",
    items: [
      "Se colocar no lugar do outro",
      "Desenvolver sua inteligência emocional",
      "Atender sempre com sorriso no rosto",
      "Tratar o outro como gostaria de ser tratado",
      "Reconhecer os méritos do outro",
    ],
  },
  {
    title: "Harmonia",
    items: [
      "Respeitar as diferentes opiniões e ideias",
      "Não originar e nem multiplicar boatos",
      "Zelar pela amizade com as pessoas",
      "Ser coeso, sucinto e um excelente ouvinte",
      "Ser líder e não chefe",
    ],
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Parte Superior do Sobre */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Conheça o Grupo Forma
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Com mais de duas décadas de atuação no mercado, o Grupo Forma se
              destaca pela excelência na prestação de serviços de Recursos
              Humanos e terceirização de mão de obra.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nosso compromisso é conectar talentos às melhores oportunidades,
              oferecendo soluções estratégicas que impulsionam o crescimento das
              empresas parceiras e o desenvolvimento profissional dos nossos
              colaboradores.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about.jpg"
              alt="Equipe Grupo Forma"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 md:p-10 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Nossa Missão
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Solucionar as adversidades do mercado, no ramo da prestação de
              serviços. Tornando-se ferramenta eficaz da modernização de
              processos na gestão de serviços, com inovação, tecnologia,
              qualidade, ética, resultados e lucratividade para clientes,
              colaboradores e parceiros.
            </p>
          </div>

          <div className="bg-blue-50 p-8 md:p-10 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-md">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Nossa Visão
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ser a primeira escolha entre os melhores na área de prestação de
              serviços, reconhecido como referência nacional nos serviços
              prestados com excelência.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-950 rounded-full mb-4 shadow-md">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-blue-950">Nossos Valores</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold text-blue-800 mb-4 border-b border-gray-100 pb-2">
                  {valor.title}
                </h4>
                <ul className="space-y-3">
                  {valor.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
