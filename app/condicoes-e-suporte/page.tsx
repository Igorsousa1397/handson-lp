export default function CondicoeseSuporte() {
  return (
    <main style={{ minHeight: "100vh", padding: "100px 0 80px" }}>
      <style>{`body, body * { cursor: auto !important; } body a { cursor: pointer !important; }`}</style>
      <div className="container" style={{ maxWidth: 720 }}>
        <a href="/" style={{ fontSize: 13, color: "var(--purple)", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>← Voltar</a>

        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px,6vw,56px)", fontWeight: 800, marginBottom: "0.5rem" }}>
          Condições e Suporte
        </h1>
        <p style={{ color: "var(--text-3)", fontSize: 13, marginBottom: "3rem" }}>Última atualização: junho de 2025</p>

        {[
          {
            title: "1. Condições de matrícula",
            text: "A matrícula no Instituto Hands On é confirmada após a aprovação do pagamento. O acesso à plataforma e aos materiais é liberado em até 24 horas úteis após a confirmação."
          },
          {
            title: "2. Formas de pagamento",
            text: "Aceitamos pagamento via Pix (à vista), boleto bancário e cartão de crédito em até 12x sem juros. O parcelamento está sujeito à aprovação da operadora do cartão."
          },
          {
            title: "3. Política de reembolso",
            text: "Você tem até 7 dias corridos após a compra para solicitar o cancelamento e reembolso integral, conforme o Código de Defesa do Consumidor (Art. 49). Após esse prazo, não são realizados reembolsos. Para solicitar, entre em contato pelo WhatsApp (11) 96331-9196."
          },
          {
            title: "4. Acesso ao conteúdo",
            text: "O acesso ao conteúdo do curso é válido conforme o plano adquirido. As aulas gravadas ficam disponíveis na plataforma durante o período letivo da turma. Aulas ao vivo (disponíveis nos planos Ouro e Diamante) são realizadas em datas previamente agendadas."
          },
          {
            title: "5. Mentoria 1:1 (Plano Diamante)",
            text: "A mentoria individual com o Sostenes está disponível exclusivamente para alunos do plano Diamante. As sessões são agendadas diretamente com o mentor via WhatsApp, respeitando a disponibilidade da agenda."
          },
          {
            title: "6. Certificado de conclusão",
            text: "O certificado é emitido após a conclusão de todos os módulos do curso e atividades práticas. O prazo de emissão é de até 10 dias úteis após a solicitação."
          },
          {
            title: "7. Suporte técnico",
            text: "Para dúvidas sobre acesso à plataforma, problemas técnicos ou questões sobre o conteúdo, entre em contato pelo WhatsApp (11) 96331-9196 ou pelo Instagram @handsoninstituto. O tempo de resposta é de até 24 horas úteis."
          },
          {
            title: "8. Conduta e uso da plataforma",
            text: "O conteúdo do curso é de uso exclusivamente pessoal e não pode ser reproduzido, distribuído ou comercializado sem autorização. Condutas que prejudiquem outros alunos ou o funcionamento da plataforma podem resultar no cancelamento do acesso sem reembolso."
          },
          {
            title: "9. Alterações nestas condições",
            text: "O Instituto Hands On se reserva o direito de atualizar estas condições a qualquer momento. Alterações relevantes serão comunicadas aos alunos matriculados via WhatsApp ou e-mail."
          },
          {
            title: "10. Contato",
            text: "📱 WhatsApp: (11) 96331-9196\n📸 Instagram: @handsoninstituto\n🌐 Site: handson-lp-eta.vercel.app"
          },
        ].map(({ title, text }) => (
          <div key={title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: "var(--text-1)", marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
