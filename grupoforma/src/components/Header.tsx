"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lista de links para não repetirmos código
  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Vagas", href: "#vagas" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo em Texto - Igual ao seu print */}
        <Link
          href="/"
          className="font-extrabold text-2xl text-blue-950 uppercase tracking-tight"
        >
          Grupo Forma
        </Link>

        {/* Menu Desktop (Escondido no celular) */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botão Menu Mobile (Aparece só no celular) */}
        <button
          className="md:hidden p-2 text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-blue-950" />
          ) : (
            <Menu className="w-7 h-7 text-blue-950" />
          )}
        </button>
      </div>

      {/* Dropdown Menu Mobile (Abre quando clica no botão hambúrguer) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <nav className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar em um link
                className="text-gray-700 hover:text-blue-600 font-semibold text-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
