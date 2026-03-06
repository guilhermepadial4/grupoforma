import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl text-blue-900">GRUPO FORMA</div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Início
          </Link>
          <Link
            href="#servicos"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Serviços
          </Link>
          <Link
            href="#sobre"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Sobre Nós
          </Link>
          <Link
            href="#vagas"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Vagas
          </Link>
          <Link
            href="#contato"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
