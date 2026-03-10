import { Target, Award, ShieldCheck, Clock } from "lucide-react";

// Textos profissionais preenchidos para a fase de testes
const differentials = [
  {
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "Com sólida atuação no mercado corporativo, acumulamos cases de sucesso e um profundo conhecimento das dinâmicas de RH em diversos setores.",
  },
  {
    icon: Target,
    title: "Atendimento Personalizado",
    description:
      "Entendemos que cada organização é única. Nossos consultores desenham processos sob medida, perfeitamente alinhados à cultura do seu negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica",
    description:
      "Atuamos com rigoroso compliance trabalhista. Garantimos que todos os processos sigam estritamente a legislação vigente, mitigando qualquer risco.",
  },
  {
    icon: Clock,
    title: "Agilidade nos Processos",
    description:
      "Utilizamos tecnologia de ponta e um amplo banco de talentos para reduzir o tempo de contratação, sem abrir mão da qualidade técnica.",
  },
];

export function Differentials() {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o Grupo Forma?
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Nossos diferenciais que garantem a excelência na entrega de
            resultados para a sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
