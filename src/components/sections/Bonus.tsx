"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const bonuses = [
  {
    tag: "Bônus 01",
    symbol: "✦",
    title: "Pack de Prompts Prontos",
    desc: "Mais de 40 prompts testados pela agência para gerar briefs, legendas, roteiros e direção criativa com qualquer IA — direto ao ponto.",
  },
  {
    tag: "Bônus 02",
    symbol: "◈",
    title: "Banco de Ideias de Criativos",
    desc: "Biblioteca com 100+ referências categorizadas por formato, objetivo e nicho. Nunca mais comece do zero.",
  },
  {
    tag: "Bônus 03",
    symbol: "⬡",
    title: "Checklist de Criação da Agência",
    desc: "O mesmo checklist interno que a Forge Digital usa antes de publicar cada criativo. Pare de esquecer elementos que comprometem a conversão.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  }),
};

export default function Bonus() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.12, once: true });

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h2
          className="headline-section text-white text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Você também leva:
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5 cursor-default"
              style={{ transition: "border-color 0.25s ease, transform 0.25s ease" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255, 75, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255, 255, 255, 0.06)";
              }}
            >
              {/* Tag */}
              <span
                className="inline-block w-fit px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest"
                style={{
                  background: "rgba(255,75,0,0.12)",
                  color: "#FF4B00",
                  border: "1px solid rgba(255,75,0,0.2)",
                }}
              >
                {bonus.tag}
              </span>

              {/* Decorative symbol */}
              <span
                className="gradient-text font-black select-none leading-none"
                style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
                aria-hidden="true"
              >
                {bonus.symbol}
              </span>

              {/* Title + desc */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {bonus.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

