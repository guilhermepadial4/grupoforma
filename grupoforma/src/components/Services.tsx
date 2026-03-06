import {
  Users,
  Clock,
  Briefcase,
  GraduationCap,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Recrutamento e Seleção",
    description:
      "Encontramos o talento ideal para a cultura da sua empresa através de processos seletivos rigorosos e humanizados.",
    icon: Users,
  },
  {
    title: "Mão de Obra Temporária",
    description:
      "Agilidade e flexibilidade para cobrir demandas sazonais ou projetos específicos com profissionais qualificados.",
    icon: Clock,
  },
  {
    title: "Terceirização de Serviços",
    description:
      "Foque no seu core business enquanto cuidamos da gestão de equipes operacionais e administrativas.",
    icon: Briefcase,
  },
  {
    title: "Gestão de Estagiários",
    description:
      "Programas completos de estágio, desde a atração de jovens talentos até o acompanhamento do desenvolvimento.",
    icon: GraduationCap,
  },
  {
    title: "Consultoria de RH",
    description:
      "Diagnóstico organizacional, pesquisa de clima e estruturação de cargos e salários para sua empresa.",
    icon: LineChart,
  },
  {
    title: "Administração de Pessoal",
    description:
      "Segurança jurídica e operacional na gestão de folha de pagamento, benefícios e rotinas trabalhistas.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Soluções completas em Gestão de Pessoas
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos um portfólio diversificado para atender todas as
            necessidades do seu RH, com tecnologia e atendimento personalizado.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
