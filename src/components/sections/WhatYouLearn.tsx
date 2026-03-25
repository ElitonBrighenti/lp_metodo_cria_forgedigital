"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const modules = [
  {
    num: "01",
    title: "Por que você trava",
    desc: "Entenda a raiz do bloqueio criativo e por que talento nunca foi o problema.",
  },
  {
    num: "02",
    title: "A estrutura C.R.I.A",
    desc: "O framework de 4 etapas que transforma qualquer ideia em criativo em minutos.",
  },
  {
    num: "03",
    title: "Sua IA pessoal",
    desc: "Configure sua IA para gerar briefs, roteiros e direção criativa no seu estilo.",
  },
  {
    num: "04",
    title: "Ferramentas gratuitas",
    desc: "Stack 100% gratuita que entrega resultado de agência sem custo nenhum.",
  },
  {
    num: "05",
    title: "Feed vs Anúncio",
    desc: "A lógica por trás de criativos que vendem vs conteúdo que só gera engajamento.",
  },
  {
    num: "06",
    title: "Produção em escala",
    desc: "Como criar 30 peças em 2 horas com o sistema de produção em lote do método.",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  }),
};

export default function WhatYouLearn() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1, once: true });

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <motion.h2
          className="headline-section text-white mb-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Do bloqueio ao criativo pronto.{" "}
          <span className="gradient-text">Sem enrolação.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Static vertical line */}
          <div
            className="absolute left-[19px] top-0 bottom-0 w-px"
            style={{ background: "#1e1e1e" }}
          />

          <div className="space-y-12">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeLeft}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative flex items-start gap-6 pl-12"
              >
                {/* Node circle */}
                <div
                  className="absolute left-0 top-0.5 flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid #2a2a2a",
                  }}
                >
                  <span className="gradient-text text-xs font-black tracking-tight">
                    {mod.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-[#555] leading-relaxed text-sm">
                    {mod.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

