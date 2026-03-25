"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

/* ─── Word-reveal ───────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) },
  },
};

function RevealLine({ text }: { text: string }) {
  return (
    <motion.span className="block" variants={containerVariants}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-[0.22em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── WhatsApp Icon ─────────────────────────────────── */
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

export default function FinalCTA() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, once: true });

  return (
    <section
      ref={ref}
      className="py-36 px-6 text-center"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a0800 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Word-reveal headline */}
        <motion.h2
          className="headline-hero text-white"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <RevealLine text="Chega de perder horas olhando" />
          <RevealLine text="pra tela em branco." />
        </motion.h2>

        {/* Gradient sub-headline */}
        <motion.p
          className="headline-section gradient-text font-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          O processo existe. Agora é só aplicar.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-[#666] text-base tracking-wide"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Método C.R.I.A — Forge Digital
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        >
          <a href="#comprar" className="btn-orange text-base">
            Quero acesso agora →
          </a>
          <a href="#whatsapp" className="btn-whatsapp gap-2 text-base">
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

