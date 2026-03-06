import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Espaço para Imagem Institucional */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-900/10"></div>
          <span className="text-gray-500 font-medium px-4 text-center">
            [COLOQUE AQUI A FOTO DA EMPRESA/ESCRITÓRIO]
          </span>
        </div>

        {/* Conteúdo de Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Sobre o Grupo Forma
          </h2>

          {/* COLE O TEXTO DO SITE ANTIGO AQUI */}
          <div className="text-gray-600 space-y-4 mb-8 text-lg">
            <p>
              Com anos de atuação no mercado, o Grupo Forma se destaca por
              oferecer soluções estratégicas e personalizadas em Recursos
              Humanos. Nosso compromisso é conectar o potencial humano aos
              objetivos de negócio da sua empresa.
            </p>
            <p>
              [COLE MAIS PARÁGRAFOS DA HISTÓRIA AQUI. Substitua este texto pelo
              original do site antigo.]
            </p>
          </div>

          {/* Tópicos de Missão/Visão/Valores */}
          <div className="space-y-4">
            {[
              "Missão: [COLE A MISSÃO DO SITE ANTIGO]",
              "Visão: [COLE A VISÃO DO SITE ANTIGO]",
              "Valores: Ética, Transparência, Foco no Cliente e Inovação.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
