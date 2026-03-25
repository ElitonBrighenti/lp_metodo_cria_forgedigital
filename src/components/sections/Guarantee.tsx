"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

/* ─── Shield SVG ───────────────────────────────────── */
function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#shield-grad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-20 h-20"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shield-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF4B00" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function Guarantee() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2, once: true });

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) }}
          className="relative rounded-3xl p-10 md:p-14 flex flex-col items-center text-center gap-6"
          style={{
            /* gradient border trick: background-clip on the wrapper */
            background: "#0e0e0e",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(#0e0e0e, #0e0e0e), linear-gradient(135deg, rgba(255,75,0,0.6), rgba(255,140,0,0.25) 60%, rgba(255,75,0,0.05))",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Shield icon */}
          <ShieldIcon />

          {/* Title */}
          <h2 className="headline-section text-white">
            7 dias. Risco zero.{" "}
            <span className="gradient-text">Palavra da Forge Digital.</span>
          </h2>

          {/* Body */}
          <p className="text-[#666] leading-relaxed max-w-lg text-base">
            Se você comprar hoje, aplicar o método e sentir que ele não
            funcionou para você — por qualquer motivo — basta mandar uma
            mensagem em até{" "}
            <span className="text-white font-semibold">7 dias</span> e
            devolvemos{" "}
            <span className="text-white font-semibold">100% do valor</span>,
            sem perguntas, sem burocracia. Nenhum risco. O investimento é seu,
            mas o compromisso com seu resultado é nosso.
          </p>

          {/* Divider */}
          <div
            className="w-16 h-px mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,75,0,0.4), transparent)",
            }}
          />

          {/* Footer note */}
          <p className="text-[#444] text-xs uppercase tracking-widest">
            Garantia incondicional de satisfação
          </p>
        </motion.div>
      </div>
    </section>
  );
}

