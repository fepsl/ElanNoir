// src/pages/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <div style={{ 
      padding: '80px 40px', 
      maxWidth: 900, 
      margin: 'auto',
      color: '#f2f2f2'
    }}>
      <h1 style={{ 
        fontSize: 36, 
        marginBottom: 20,
        fontWeight: 700
      }}>
        Política de Privacidade
      </h1>
      
      <p style={{ 
        fontSize: 14, 
        color: '#999',
        marginBottom: 40
      }}>
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          1. Informações que coletamos
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          A Elan Noir coleta informações que você nos fornece diretamente quando:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Cria uma conta em nosso site</li>
          <li>Realiza uma compra</li>
          <li>Assina nossa newsletter</li>
          <li>Entre em contato conosco</li>
          <li>Participa de promoções ou pesquisas</li>
        </ul>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginTop: 16 }}>
          As informações coletadas incluem: nome completo, endereço de email, 
          endereço de entrega, telefone, CPF e informações de pagamento.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          2. Como usamos suas informações
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          Utilizamos as informações coletadas para:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Processar e entregar seus pedidos</li>
          <li>Enviar confirmações e atualizações sobre pedidos</li>
          <li>Responder suas dúvidas e solicitações</li>
          <li>Enviar comunicações de marketing (com seu consentimento)</li>
          <li>Melhorar nossos produtos e serviços</li>
          <li>Prevenir fraudes e garantir segurança</li>
          <li>Cumprir obrigações legais</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          3. Compartilhamento de informações
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          Não vendemos suas informações pessoais. Podemos compartilhar seus dados com:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li><strong>Processadores de pagamento:</strong> para processar transações</li>
          <li><strong>Transportadoras:</strong> para entregar seus pedidos</li>
          <li><strong>Provedores de serviços:</strong> que nos auxiliam nas operações</li>
          <li><strong>Autoridades legais:</strong> quando requerido por lei</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          4. Cookies e tecnologias similares
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
          analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar 
          suas preferências de cookies nas configurações do seu navegador.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          5. Segurança dos dados
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Implementamos medidas de segurança técnicas e organizacionais para proteger 
          suas informações contra acesso não autorizado, alteração, divulgação ou 
          destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          6. Seus direitos (LGPD)
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Confirmar se tratamos seus dados pessoais</li>
          <li>Acessar seus dados</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
          <li>Solicitar anonimização, bloqueio ou eliminação</li>
          <li>Solicitar portabilidade dos dados</li>
          <li>Revogar consentimento</li>
          <li>Obter informações sobre compartilhamento</li>
        </ul>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginTop: 16 }}>
          Para exercer seus direitos, entre em contato através do email: 
          <strong> privacidade@elannoir.com.br</strong>
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          7. Retenção de dados
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Manteremos suas informações pessoais pelo tempo necessário para cumprir 
          os propósitos descritos nesta política, a menos que um período de retenção 
          maior seja exigido ou permitido por lei.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          8. Menores de idade
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Nossos serviços não são direcionados a menores de 18 anos. Não coletamos 
          intencionalmente informações de menores de idade. Se você é pai/mãe e 
          acredita que seu filho nos forneceu informações, entre em contato conosco.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          9. Alterações nesta política
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
          você sobre mudanças significativas por email ou através de um aviso em nosso site.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          10. Contato
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:
        </p>
        <div style={{ 
          marginTop: 20,
          padding: 24,
          background: '#0e0e0e',
          border: '1px solid #1f1f1f'
        }}>
          <p style={{ marginBottom: 8, color: '#ccc' }}>
            <strong>Email:</strong> privacidade@elannoir.com.br
          </p>
          <p style={{ marginBottom: 8, color: '#ccc' }}>
            <strong>Telefone:</strong> (11) 99999-9999
          </p>
          <p style={{ color: '#ccc' }}>
            <strong>Endereço:</strong> [Seu endereço completo]
          </p>
        </div>
      </section>
    </div>
  );
}