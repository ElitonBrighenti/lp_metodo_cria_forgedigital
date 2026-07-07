import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forgedigitalmkt.com.br"),
  title: "Método C.R.I.A — Forge Digital",
  description:
    "Pare de travar na frente da tela. O Método C.R.I.A transforma qualquer ideia em um criativo profissional em minutos, com ferramentas gratuitas, sem precisar saber design.",
  openGraph: {
    title: "Método C.R.I.A — Forge Digital",
    description:
      "Pare de travar na frente da tela. O Método C.R.I.A transforma qualquer ideia em um criativo profissional em minutos, com ferramentas gratuitas, sem precisar saber design.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
