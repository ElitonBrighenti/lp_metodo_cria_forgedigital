"use client";

import { motion } from "framer-motion";

/* ─── Word-reveal animation variants ───────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  },
};

/* ─── Helper: split line into animated word spans ───── */
function AnimatedLine({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => {
        const isHighlighted = highlight && word === highlight;
        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${
              isHighlighted ? "gradient-text" : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}

/* ─── WhatsApp icon ─────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.6 6L0 24l6.18-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.9a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.67.93.96-3.56-.24-.37A9.88 9.88 0 0 1 2.1 12c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 6.99 2.89A9.86 9.86 0 0 1 21.9 12c0 5.46-4.44 9.9-9.9 9.9zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.17 8.17 0 0 1-2.4-1.48 9.07 9.07 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

/* ─── Scroll indicator ──────────────────────────────── */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[#555]">
        Scroll
      </span>
      <motion.div
        className="w-px bg-gradient-to-b from-[#555] to-transparent"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 40, opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ─── Main Component ────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, #141414 0%, #0a0a0a 70%, #000000 100%)",
      }}
    >
      {/* ── Badge ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card text-sm text-[#888] font-medium"
      >
        {/* Pulsing orange dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4B00] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4B00]" />
        </span>
        Método usado diariamente na Forge Digital
      </motion.div>

      {/* ── Headline ─────────────────────────────────── */}
      <motion.h1
        className="headline-hero max-w-[820px] text-white mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line 1 */}
        <span className="block mb-1">
          <AnimatedLine text="Você não trava por falta de talento." />
        </span>
        {/* Line 2 — "processo" highlighted */}
        <span className="block">
          <AnimatedLine
            text="Você trava por falta de processo."
            highlight="processo."
          />
        </span>
      </motion.h1>

      {/* ── Subheadline ──────────────────────────────── */}
      <motion.p
        className="max-w-[560px] text-[#888] text-lg leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      >
        O Método C.R.I.A elimina o bloqueio criativo e transforma qualquer ideia
        em um criativo profissional — em minutos, com ferramentas gratuitas, sem
        precisar saber design.
      </motion.p>

      {/* ── Buttons ──────────────────────────────────── */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
      >
        <a href="#comprar" className="btn-orange text-base">
          Quero parar de travar →
        </a>
        <a href="#whatsapp" className="btn-whatsapp gap-2 text-base">
          <WhatsAppIcon />
          Falar no WhatsApp
        </a>
      </motion.div>

      {/* ── Micro-copy ───────────────────────────────── */}
      <motion.p
        className="text-[13px] text-[#555] tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        Ferramentas gratuitas · Acesso imediato · Garantia de 7 dias
      </motion.p>

      {/* ── Scroll indicator ─────────────────────────── */}
      <ScrollIndicator />
    </section>
  );
}

