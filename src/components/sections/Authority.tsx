"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const lines = [
  {
    text: "Esse não é um curso de IA.",
    className: "headline-section text-[#3a3a3a]",
    delay: 0,
  },
  {
    text: "Não é um curso de design.",
    className: "headline-section text-[#3a3a3a]",
    delay: 0.14,
  },
  {
    text: "É o processo que usamos todo dia para criar criativos para clientes reais.",
    className: "headline-section text-white font-black",
    delay: 0.3,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  }),
};

export default function Authority() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.12, once: true });

  return (
    <section
      ref={ref}
      className="relative py-36 px-6 overflow-hidden text-center"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
      }}
    >
      {/* Decorative background word */}
      <span
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-white font-black whitespace-nowrap"
        style={{
          fontSize: "clamp(120px, 20vw, 260px)",
          opacity: 0.015,
          letterSpacing: "-0.04em",
        }}
        aria-hidden="true"
      >
        FORGE
      </span>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-5">
        {/* Staggered lines */}
        {lines.map((line, i) => (
          <motion.p
            key={i}
            custom={line.delay}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={line.className}
          >
            {line.text}
          </motion.p>
        ))}

        {/* Explanatory paragraph */}
        <motion.p
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-6 text-[#666] leading-relaxed text-base max-w-[520px]"
        >
          A Forge Digital é uma agência de tráfego e criação. Esse método nasceu
          da nossa operação diária — testado em dezenas de contas, nichos e
          formatos. O que você vai aprender funciona porque a gente usa.
        </motion.p>

        {/* Badge */}
        <motion.div
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm text-[#888] font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4B00] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4B00]" />
          </span>
          Forge Digital · forgedigitalmkt.com.br
        </motion.div>
      </div>
    </section>
  );
}

