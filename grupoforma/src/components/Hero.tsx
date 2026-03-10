import Link from "next/link";
import Image from "next/image"; // <-- Importação do Image adicionada aqui
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Coluna da Esquerda: Conteúdo em Texto */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight tracking-tight mb-6">
            Transformando talentos em{" "}
            <span className="text-blue-600">resultados excepcionais</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Conectamos as melhores empresas aos profissionais mais qualificados
            do mercado. Soluções completas e estratégicas em Recursos Humanos
            para impulsionar o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-200"
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-900 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              Conheça nossos serviços
            </Link>
          </div>
        </div>

        {/* Coluna da Direita: Espaço para Imagem */}
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center">
          {/* O componente Image entrou aqui, substituindo os textos e a div de fundo */}
          <Image
            src="/images/hero.jpg"
            alt="Equipe trabalhando"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}