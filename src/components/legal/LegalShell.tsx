import Link from "next/link";
import Footer from "@/components/sections/Footer";

export default function LegalShell({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "#0a0a0a" }}>
      {/* ── Top bar ─────────────────────────────────── */}
      <header
        className="sticky top-0 z-20 px-6 py-5"
        style={{
          background: "rgba(10,10,10,0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-black text-lg tracking-tight"
          >
            Forge Digital
          </Link>
          <Link
            href="/"
            className="text-[#888] text-sm hover:text-white transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {/* ── Content ─────────────────────────────────── */}
      <section className="flex-1 px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="headline-section text-white mb-3">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {title.split(" ").slice(-1)}
            </span>
          </h1>
          <p className="text-[#555] text-sm mb-12">
            Última atualização: {updatedAt}
          </p>

          <div className="legal-prose">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
