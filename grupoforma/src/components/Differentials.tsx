import { Target, Award, ShieldCheck, Clock } from "lucide-react";

// EDITE OS TEXTOS ABAIXO COM OS DADOS DO SITE ANTIGO
const differentials = [
  {
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "[COLE AQUI: Texto sobre os anos de mercado ou cases de sucesso do site antigo.]",
  },
  {
    icon: Target,
    title: "Atendimento Personalizado",
    description:
      "[COLE AQUI: Texto sobre como o atendimento é feito sob medida.]",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica",
    description: "[COLE AQUI: Texto sobre compliance e segurança trabalhista.]",
  },
  {
    icon: Clock,
    title: "Agilidade nos Processos",
    description:
      "[COLE AQUI: Texto sobre a rapidez na entrega dos candidatos ou serviços.]",
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
