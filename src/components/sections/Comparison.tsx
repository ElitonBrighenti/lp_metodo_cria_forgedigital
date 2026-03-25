"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const withoutItems = [
  "Horas perdidas tentando ter uma ideia",
  "Resultado amador mesmo com muito esforço",
  "Dependência de inspiração que não vem",
  "Frustração toda vez que precisa criar",
  "Sensação de que não tem talento",
];

const withItems = [
  "Ideia em minutos com o processo certo",
  "Criativo profissional sem saber design",
  "Fluxo repetível que funciona toda vez",
  "IA gerando o visual enquanto você pensa na estratégia",
  "Resultado em horas, não dias",
];

const slideIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  },
});

export default function Comparison() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, once: true });

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#111111" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="headline-section text-white">
            A diferença que um método faz
          </h2>
        </motion.div>

        {/* Comparison grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #222" }}
        >
          {/* ── Left: Without ──────────────────────── */}
          <motion.div
            variants={slideIn("left")}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-8 md:p-10"
            style={{ background: "#0e0e0e" }}
          >
            <p className="text-sm uppercase tracking-widest text-[#3a3a3a] font-semibold mb-8">
              Sem o método
            </p>
            <ul className="space-y-5">
              {withoutItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-lg font-bold leading-none shrink-0"
                    style={{ color: "#3a3a3a" }}
                  >
                    ✕
                  </span>
                  <span className="text-[#444] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Divider ─────────────────────────────── */}
          <div style={{ background: "#222" }} className="hidden md:block" />

          {/* ── Right: With ────────────────────────── */}
          <motion.div
            variants={slideIn("right")}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-8 md:p-10"
            style={{ background: "#111111" }}
          >
            <p className="text-sm uppercase tracking-widest font-semibold mb-8 gradient-text">
              Com o Método C.R.I.A
            </p>
            <ul className="space-y-5">
              {withItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg font-bold leading-none shrink-0 gradient-text">
                    ✓
                  </span>
                  <span className="text-[#ccc] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

