"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/lib/useInView";

const faqs = [
  {
    q: "Preciso saber design?",
    a: "Não. O método foi criado exatamente para quem não tem background em design. Você vai usar ferramentas gratuitas com processos simples e diretos. O resultado é profissional independente da sua experiência.",
  },
  {
    q: "Quanto tempo para o primeiro criativo?",
    a: "Com o processo do módulo 02 aplicado, a maioria dos alunos cria o primeiro criativo completo em menos de 30 minutos. Alguns levam uma hora. Nenhum leva dias.",
  },
  {
    q: "As ferramentas são pagas?",
    a: "Não. A stack ensinada no módulo 04 é 100% gratuita. Nenhuma assinatura, nenhuma ferramenta paga. Tudo funciona no plano free.",
  },
  {
    q: "Funciona para anúncios pagos?",
    a: "Sim. O módulo 05 é dedicado exatamente à diferença entre criativo de feed e criativo de anúncio. Você vai entender o que faz um criativo converter em tráfego pago.",
  },
  {
    q: "Como acesso após a compra?",
    a: "Imediatamente após a confirmação do pagamento você recebe o acesso por e-mail. É só clicar, criar sua conta na plataforma e já começar o módulo 01.",
  },
];

function FAQItem({
  item,
  index,
  inView,
}: {
  item: (typeof faqs)[0];
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="border-b"
      style={{ borderColor: "#222" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-base group-hover:text-[#ccc] transition-colors">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#FF4B00] text-2xl font-light leading-none"
          style={{ transformOrigin: "center" }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-[#888] text-sm leading-relaxed pb-6 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1, once: true });

  return (
    <section ref={ref} className="py-28 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="headline-section text-white mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Perguntas rápidas
        </motion.h2>

        {/* Top divider */}
        <div className="border-t" style={{ borderColor: "#222" }} />

        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

