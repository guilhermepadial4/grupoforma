import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services"; // Importe o novo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Services /> {/* Adicione aqui */}
    </main>
  );
}
