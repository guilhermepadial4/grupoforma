import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats"; // <-- Adicione a importação aqui
import { Differentials } from "@/components/Differentials";
import { Vacancies } from "@/components/Vacancies";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Services />
      <About />
      <Stats /> {/* <-- Adicione o componente aqui */}
      <Differentials />
      <Vacancies />
      <Contact />
    </main>
  );
}
