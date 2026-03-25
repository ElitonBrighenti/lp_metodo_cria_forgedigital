"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const lines = [
  {
    text: "Você abre o computador pra criar.",
    className: "headline-section text-[#3a3a3a]",
    delay: 0,
  },
  {
    text: "E fica olhando pra tela em branco.",
    className: "headline-section text-[#3a3a3a]",
    delay: 0.12,
  },
  {
    text: "Por horas.",
    className:
      "font-black text-white leading-none tracking-tight",
    style: { fontSize: "clamp(64px, 10vw, 128px)" },
    delay: 0.28,
  },
  {
    text: "Não é bloqueio criativo. É falta de método.",
    className: "text-white text-xl md:text-2xl font-medium",
    delay: 0.46,
  },
  {
    text: "E isso tem solução.",
    className: "gradient-text text-xl md:text-2xl font-bold",
    delay: 0.58,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  }),
};

export default function Pain() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, once: true });

  return (
    <section
      ref={ref}
      className="py-32 md:py-44 flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            custom={line.delay}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={line.className}
            style={line.style}
          >
            {line.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

