import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Termos de Uso — Forge Digital",
  description:
    "Termos e condições de uso do Método C.R.I.A e do site da Forge Digital.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUso() {
  return (
    <LegalShell title="Termos de Uso" updatedAt="06 de julho de 2026">
      <p>
        Estes Termos de Uso regem o acesso e a utilização do site{" "}
        <a href="https://forgedigitalmkt.com.br" target="_blank" rel="noopener noreferrer">
          forgedigitalmkt.com.br
        </a>{" "}
        e do produto digital <strong>Método C.R.I.A</strong>, oferecidos pela{" "}
        <strong>Forge Digital</strong>. Ao navegar, se cadastrar ou efetuar uma
        compra, você declara ter lido, compreendido e aceito estes termos.
      </p>

      <h2>1. Objeto</h2>
      <p>
        O Método C.R.I.A é um produto digital educacional (curso/infoproduto)
        que ensina um processo para criação de peças criativas com o apoio de
        ferramentas de inteligência artificial e recursos gratuitos. O produto é
        entregue de forma online, por meio de acesso à plataforma indicada após
        a compra.
      </p>

      <h2>2. Acesso e cadastro</h2>
      <ul>
        <li>O acesso ao conteúdo é pessoal e intransferível;</li>
        <li>Você é responsável por manter a confidencialidade dos seus dados de acesso;</li>
        <li>É proibido compartilhar, revender ou distribuir o acesso a terceiros.</li>
      </ul>

      <h2>3. Pagamento e acesso</h2>
      <p>
        As compras são processadas por plataformas de pagamento parceiras. Após
        a confirmação do pagamento, o acesso é liberado conforme informado na
        página de vendas, normalmente por e-mail.
      </p>

      <h2>4. Garantia e reembolso</h2>
      <p>
        Você tem o direito de solicitar o reembolso integral em até{" "}
        <strong>7 (sete) dias</strong> corridos a contar da data da compra,
        conforme o direito de arrependimento previsto no art. 49 do Código de
        Defesa do Consumidor. Para solicitar, basta enviar uma mensagem para{" "}
        <a href="mailto:contato@forgedigitalmkt.com.br">
          contato@forgedigitalmkt.com.br
        </a>{" "}
        dentro do prazo.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo do Método C.R.I.A — textos, vídeos, materiais, prompts,
        marca e identidade visual — é de titularidade da Forge Digital e está
        protegido por lei. É vedada a reprodução, cópia, distribuição ou uso não
        autorizado, no todo ou em parte.
      </p>

      <h2>6. Uso permitido e condutas proibidas</h2>
      <ul>
        <li>É proibido copiar, reproduzir ou revender o conteúdo;</li>
        <li>É proibido usar o material para fins ilícitos ou que violem direitos de terceiros;</li>
        <li>É proibido tentar burlar sistemas de segurança ou de controle de acesso.</li>
      </ul>

      <h2>7. Ausência de garantia de resultados</h2>
      <p>
        O Método C.R.I.A é um material educacional. Os resultados dependem da
        dedicação, do esforço e da aplicação individual de cada pessoa.{" "}
        <strong>
          Não garantimos resultados específicos, ganhos financeiros ou desempenho
        </strong>
        , uma vez que estes variam de acordo com fatores externos e individuais.
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        A Forge Digital não se responsabiliza por danos indiretos decorrentes do
        uso ou da impossibilidade de uso do produto, nem por decisões tomadas
        pelo usuário com base no conteúdo. O produto é fornecido &quot;como
        está&quot;.
      </p>

      <h2>9. Alterações dos termos</h2>
      <p>
        Estes Termos de Uso podem ser atualizados a qualquer momento. A versão
        vigente estará sempre disponível nesta página, com a data da última
        atualização indicada no topo.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes termos são regidos pelas leis da República Federativa do Brasil.
        Fica eleito o foro do domicílio do consumidor para dirimir eventuais
        controvérsias.
      </p>

      <h2>11. Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para{" "}
        <a href="mailto:contato@forgedigitalmkt.com.br">
          contato@forgedigitalmkt.com.br
        </a>
        .
      </p>
    </LegalShell>
  );
}
