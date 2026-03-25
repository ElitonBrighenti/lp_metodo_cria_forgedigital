"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{
        background: "#050505",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <span className="text-white font-black text-2xl tracking-tight">
          Forge Digital
        </span>

        {/* Site link */}
        <a
          href="https://forgedigitalmkt.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] text-sm hover:text-[#888] transition-colors"
        >
          forgedigitalmkt.com.br
        </a>

        {/* Policy links */}
        <div className="flex items-center gap-6 text-[#444] text-xs">
          <a href="#" className="hover:text-[#666] transition-colors">
            Política de Privacidade
          </a>
          <span style={{ color: "#222" }}>·</span>
          <a href="#" className="hover:text-[#666] transition-colors">
            Termos de Uso
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#333] text-xs">
          © 2025 Forge Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

