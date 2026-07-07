import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";

/* Altere aqui se quiser outro e-mail de contato */
const CONTATO_EMAIL = "contato@forgedigitalmkt.com.br";

export const metadata: Metadata = {
  title: "Política de Privacidade — Forge Digital",
  description:
    "Como a Forge Digital coleta, usa e protege os seus dados, em conformidade com a LGPD.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalShell title="Política de Privacidade" updatedAt="julho de 2026">
      <p>
        A <strong>Forge Digital</strong> (&quot;nós&quot;) valoriza a privacidade
        dos seus dados. Esta Política de Privacidade explica como coletamos,
        usamos e protegemos as informações que você fornece ao se cadastrar na
        Lista de Fundadores do Método C.R.I.A e em outras ações da Forge Digital,
        em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018
        – LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <p>Ao preencher nosso formulário, podemos coletar:</p>
      <ul>
        <li>Nome completo</li>
        <li>Endereço de e-mail</li>
        <li>Número de telefone / WhatsApp</li>
      </ul>
      <p>Esses dados são fornecidos voluntariamente por você ao se inscrever.</p>

      <h2>2. Como usamos seus dados</h2>
      <p>Utilizamos suas informações para:</p>
      <ul>
        <li>
          Enviar o material gratuito prometido no cadastro (pack de prompts e
          conteúdos relacionados);
        </li>
        <li>
          Comunicar novidades, lançamentos e condições especiais do Método
          C.R.I.A e da Forge Digital;
        </li>
        <li>
          Entrar em contato por e-mail, WhatsApp ou telefone sobre nossos
          produtos e serviços;
        </li>
        <li>Melhorar nossas ofertas e comunicações.</li>
      </ul>
      <p>
        Não vendemos, alugamos nem compartilhamos seus dados com terceiros para
        fins de marketing.
      </p>

      <h2>3. Base legal</h2>
      <p>
        O tratamento dos seus dados se baseia no seu consentimento, fornecido no
        momento do cadastro, e no legítimo interesse da Forge Digital em se
        comunicar com pessoas interessadas em seus produtos.
      </p>

      <h2>4. Compartilhamento de dados</h2>
      <p>
        Seus dados podem ser processados por ferramentas e plataformas que
        utilizamos para operar nosso negócio (por exemplo, plataformas de e-mail
        marketing, automação e a própria Meta/Facebook). Essas plataformas seguem
        seus próprios termos e políticas de privacidade.
      </p>

      <h2>5. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas razoáveis para proteger seus dados contra acesso não
        autorizado, perda ou uso indevido. Mantemos suas informações apenas pelo
        tempo necessário para as finalidades descritas nesta política.
      </p>

      <h2>6. Seus direitos</h2>
      <p>De acordo com a LGPD, você pode a qualquer momento:</p>
      <ul>
        <li>Confirmar a existência de tratamento dos seus dados;</li>
        <li>Acessar, corrigir ou atualizar seus dados;</li>
        <li>Solicitar a exclusão dos seus dados;</li>
        <li>Revogar o consentimento e se descadastrar de nossas comunicações.</li>
      </ul>
      <p>
        Para exercer esses direitos, entre em contato pelo e-mail:{" "}
        <a href={`mailto:${CONTATO_EMAIL}`}>{CONTATO_EMAIL}</a>
      </p>

      <h2>7. Descadastro</h2>
      <p>
        Você pode se descadastrar das nossas comunicações a qualquer momento,
        clicando no link de descadastro presente em nossos e-mails ou
        solicitando diretamente pelo nosso contato.
      </p>

      <h2>8. Alterações nesta política</h2>
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente. A versão
        mais recente estará sempre disponível neste endereço.
      </p>

      <h2>9. Contato</h2>
      <p>
        Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus
        dados, entre em contato:
      </p>
      <p>
        <strong>Forge Digital</strong>
        <br />
        E-mail: <a href={`mailto:${CONTATO_EMAIL}`}>{CONTATO_EMAIL}</a>
      </p>
    </LegalShell>
  );
}
