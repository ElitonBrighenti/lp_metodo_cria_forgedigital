"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

/* ─── Count-up hook ─────────────────────────────────── */
function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
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

export default function Offer() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2, once: true });
  const price = useCountUp(47, inView);

  return (
    <section
      ref={ref}
      id="comprar"
      className="py-28 px-6"
      style={{ background: "#111111" }}
    >
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) }}
          className="rounded-3xl p-10 flex flex-col items-center text-center gap-6"
          style={{
            background: "#0e0e0e",
            border: "1px solid rgba(255,75,0,0.22)",
            boxShadow: "0 0 48px 0 rgba(255,75,0,0.07), 0 0 1px 0 rgba(255,75,0,0.3)",
          }}
        >
          {/* Top micro-copy */}
          <p className="text-[#555] text-xs uppercase tracking-widest font-medium">
            Investimento único · Acesso vitalício · Bônus inclusos
          </p>

          {/* Strikethrough price */}
          <p className="text-[#444] text-base line-through">De R$197</p>

          {/* Count-up price */}
          <div>
            <p
              className="gradient-text font-black leading-none"
              style={{ fontSize: "clamp(72px, 12vw, 112px)" }}
            >
              R${price}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-[#888] text-sm max-w-xs leading-relaxed">
            Menos que uma hora de freelancer. Resultado pra vida toda.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <a
              href="#comprar"
              id="comprar"
              className="btn-orange w-full text-base"
            >
              Quero parar de travar agora →
            </a>
            <a
              href="#whatsapp"
              id="whatsapp"
              className="btn-whatsapp gap-2 w-full text-base"
            >
              <WhatsAppIcon />
              Falar no WhatsApp antes
            </a>
          </div>

          {/* Trust seals */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#444] text-xs pt-2">
            <span>🔒 Compra segura</span>
            <span className="text-[#2a2a2a]">·</span>
            <span>🛡️ Garantia 7 dias</span>
            <span className="text-[#2a2a2a]">·</span>
            <span>✓ Acesso imediato</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

