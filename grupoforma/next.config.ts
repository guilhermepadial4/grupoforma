import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Isso avisa o Next.js para gerar arquivos estáticos (HTML/CSS/JS)
  output: "export",

  // Como a Locaweb não tem o servidor do Next.js para otimizar imagens,
  // precisamos desativar essa função para não dar erro no build
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
