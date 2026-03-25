"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const cards = [
  {
    emoji: "📱",
    title: "Social media",
    desc: "Você cria conteúdo para marcas ou perfis e quer entregar criativos mais rápido e com mais qualidade.",
  },
  {
    emoji: "🎯",
    title: "Gestor de tráfego",
    desc: "Você precisa de criativos com frequência e cansa de depender de designer para rodar suas campanhas.",
  },
  {
    emoji: "🏪",
    title: "Dono de negócio",
    desc: "Você quer parar de terceirizar tudo e ter autonomia para criar peças do próprio negócio no dia a dia.",
  },
  {
    emoji: "🤝",
    title: "Afiliado",
    desc: "Você promove produtos digitais e quer criativos que se destacam no feed sem pagar por isso.",
  },
  {
    emoji: "🎨",
    title: "Sem design",
    desc: "Você nunca aprendeu design e acha que criativo bom é privilégio de quem tem esse dom.",
  },
  {
    emoji: "⚙️",
    title: "Quer um processo",
    desc: "Você está cansado de improvisar e quer um método claro, repetível e que funcione toda vez.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  }),
};

export default function ForWho() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1, once: true });

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#111111" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h2
          className="headline-section text-white text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Esse método foi feito pra você{" "}
          <span className="gradient-text">se…</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-4 cursor-default"
              style={{
                transition:
                  "border-color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255, 75, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255, 255, 255, 0.06)";
              }}
            >
              <span className="text-4xl">{card.emoji}</span>
              <div>
                <h3 className="text-white font-bold text-base mb-1">
                  {card.title}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

