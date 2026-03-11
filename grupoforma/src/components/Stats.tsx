"use client";

import CountUp from "react-countup";

const stats = [
  { num: 500, suffix: "", text: "Empresas Atendidas" },
  { num: 1200, suffix: "", text: "Profissionais Contratados" },
  { num: 15, suffix: "", text: "Anos de Experiência" },
  { num: 98, suffix: "%", text: "Satisfação de Clientes" },
];

export function Stats() {
  return (
    <section className="py-16 bg-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                {/* O componente CountUp faz a mágica acontecer */}
                <CountUp
                  end={stat.num}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy={true} // Só anima quando o usuário rolar até aqui
                  scrollSpyOnce={true} // Anima apenas na primeira vez
                />
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
