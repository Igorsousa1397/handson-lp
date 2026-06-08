export default function PoliticaPrivacidade() {
  return (
    <main style={{ minHeight: "100vh", padding: "100px 0 80px" }}>
      <style>{`body, body * { cursor: auto !important; } body a { cursor: pointer !important; }`}</style>
      <div className="container" style={{ maxWidth: 720 }}>
        <a href="/" style={{ fontSize: 13, color: "var(--purple)", textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>← Voltar</a>

        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px,6vw,56px)", fontWeight: 800, marginBottom: "0.5rem" }}>
          Política de Privacidade
        </h1>
        <p style={{ color: "var(--text-3)", fontSize: 13, marginBottom: "3rem" }}>Última atualização: junho de 2025</p>

        {[
          {
            title: "1. Quem somos",
            text: "O Instituto Hands On é uma instituição de ensino especializada em Quality Assurance (QA), com sede no Brasil. Nosso site é handson-lp-eta.vercel.app e nosso WhatsApp de contato é (11) 96331-9196."
          },
          {
            title: "2. Dados que coletamos",
            text: "Coletamos dados fornecidos voluntariamente por você ao preencher formulários de interesse, como nome, e-mail e telefone. Também podemos coletar dados de navegação (páginas visitadas, tempo de sessão) de forma anônima para fins de melhoria do site."
          },
          {
            title: "3. Como usamos seus dados",
            text: "Utilizamos seus dados para: entrar em contato sobre nossos cursos e turmas disponíveis; enviar materiais informativos relacionados ao mercado de QA; processar matrículas e pagamentos; e melhorar nossa comunicação e produtos educacionais."
          },
          {
            title: "4. Compartilhamento de dados",
            text: "Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros sem seu consentimento, exceto quando exigido por lei ou para processamento de pagamentos por parceiros confiáveis (ex.: gateway de pagamento)."
          },
          {
            title: "5. Armazenamento e segurança",
            text: "Seus dados são armazenados em servidores seguros e protegidos. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda ou destruição."
          },
          {
            title: "6. Seus direitos (LGPD)",
            text: "De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a: acessar seus dados; corrigir dados incorretos; solicitar a exclusão dos seus dados; revogar consentimento a qualquer momento. Para exercer esses direitos, entre em contato pelo WhatsApp (11) 96331-9196."
          },
          {
            title: "7. Cookies",
            text: "Utilizamos cookies para melhorar sua experiência de navegação. Você pode desativá-los nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site."
          },
          {
            title: "8. Contato",
            text: "Dúvidas sobre esta política? Fale conosco pelo WhatsApp (11) 96331-9196 ou pelo Instagram @handsoninstituto."
          },
        ].map(({ title, text }) => (
          <div key={title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: "var(--text-1)", marginBottom: "0.5rem" }}>{title}</h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.7 }}>{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
