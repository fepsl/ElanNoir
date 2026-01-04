// src/pages/TermsOfService.tsx
export default function TermsOfService() {
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
        Termos de Uso
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
          1. Aceitação dos Termos
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Ao acessar e usar o site da Elan Noir (elannoir.com.br), você concorda em 
          cumprir e estar sujeito aos seguintes termos e condições de uso. Se você 
          não concordar com qualquer parte destes termos, não deverá usar nosso site.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          2. Uso do Site
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          Você concorda em usar o site apenas para fins legais e de maneira que não 
          infrinja os direitos de terceiros ou restrinja seu uso e aproveitamento do site.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          É proibido:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Usar o site de forma fraudulenta</li>
          <li>Transmitir conteúdo ilegal, ofensivo ou prejudicial</li>
          <li>Tentar obter acesso não autorizado ao site</li>
          <li>Interferir no funcionamento do site</li>
          <li>Copiar, reproduzir ou redistribuir o conteúdo sem autorização</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          3. Conta de Usuário
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          Para fazer compras, você precisa criar uma conta fornecendo informações 
          precisas e completas. Você é responsável por:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Manter a confidencialidade de sua senha</li>
          <li>Todas as atividades realizadas em sua conta</li>
          <li>Notificar-nos imediatamente sobre uso não autorizado</li>
          <li>Garantir que as informações da conta estejam atualizadas</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          4. Produtos e Preços
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          <strong>4.1 Disponibilidade:</strong> Todos os produtos estão sujeitos a 
          disponibilidade. Reservamo-nos o direito de descontinuar qualquer produto a 
          qualquer momento.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          <strong>4.2 Preços:</strong> Os preços exibidos estão em Reais (BRL) e 
          podem ser alterados sem aviso prévio. Nos esforçamos para manter informações 
          precisas, mas erros podem ocorrer.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          <strong>4.3 Descrições:</strong> Fazemos o possível para descrever 
          produtos com precisão. As cores podem variar ligeiramente devido às 
          configurações de tela.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          5. Pedidos e Pagamento
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          <strong>5.1 Confirmação:</strong> Ao fazer um pedido, você receberá um 
          email de confirmação. A confirmação não significa aceitação do pedido - 
          apenas confirmamos o recebimento.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          <strong>5.2 Pagamento:</strong> Aceitamos cartões de crédito, PIX e boleto. 
          O pedido só será processado após aprovação do pagamento.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          <strong>5.3 Cancelamento:</strong> Reservamo-nos o direito de cancelar 
          pedidos em caso de produtos indisponíveis, erros de preço, suspeita de 
          fraude ou outras circunstâncias excepcionais.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          6. Entrega
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          <strong>6.1 Prazo:</strong> Os prazos de entrega são estimativas e começam 
          a contar após a aprovação do pagamento. Não nos responsabilizamos por atrasos 
          causados por transportadoras.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          <strong>6.2 Endereço:</strong> É sua responsabilidade fornecer um endereço 
          de entrega correto e completo. Não nos responsabilizamos por erros de 
          entrega causados por informações incorretas.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          <strong>6.3 Frete:</strong> Os custos de frete são calculados no checkout 
          com base no endereço de entrega. Oferecemos frete grátis para compras acima 
          de R$ 200.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          7. Trocas e Devoluções
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          Você tem <strong>30 dias</strong> a partir do recebimento para solicitar 
          troca ou devolução. Para mais detalhes, consulte nossa 
          <strong> Política de Trocas e Devoluções</strong>.
        </p>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Condições:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Produto sem uso, com etiquetas originais</li>
          <li>Embalagem original preservada</li>
          <li>Nota fiscal incluída</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          8. Propriedade Intelectual
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Todo o conteúdo do site, incluindo textos, imagens, logos, designs e código, 
          é propriedade da Elan Noir e protegido por leis de direitos autorais. 
          É proibida a reprodução, distribuição ou uso comercial sem autorização expressa.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          9. Limitação de Responsabilidade
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          A Elan Noir não se responsabiliza por:
        </p>
        <ul style={{ lineHeight: 1.8, color: '#ccc', marginLeft: 20 }}>
          <li>Danos indiretos, incidentais ou consequenciais</li>
          <li>Perda de lucros ou dados</li>
          <li>Interrupções do serviço ou erros técnicos</li>
          <li>Conteúdo de terceiros vinculado ao nosso site</li>
          <li>Atrasos ou falhas de entrega por transportadoras</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          10. Direito Aplicável
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão 
          resolvidas no foro da comarca de [Sua Cidade], com renúncia expressa a 
          qualquer outro, por mais privilegiado que seja.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          11. Alterações nos Termos
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc' }}>
          Reservamo-nos o direito de modificar estes termos a qualquer momento. 
          Mudanças significativas serão notificadas por email ou através do site. 
          O uso continuado após mudanças constitui aceitação dos novos termos.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16, fontWeight: 600 }}>
          12. Contato
        </h2>
        <p style={{ lineHeight: 1.8, color: '#ccc', marginBottom: 16 }}>
          Para dúvidas sobre estes Termos de Uso:
        </p>
        <div style={{ 
          padding: 24,
          background: '#0e0e0e',
          border: '1px solid #1f1f1f'
        }}>
          <p style={{ marginBottom: 8, color: '#ccc' }}>
            <strong>Email:</strong> contato@elannoir.com.br
          </p>
          <p style={{ marginBottom: 8, color: '#ccc' }}>
            <strong>WhatsApp:</strong> (11) 99999-9999
          </p>
          <p style={{ color: '#ccc' }}>
            <strong>Horário de atendimento:</strong> Segunda a Sexta, 9h às 18h
          </p>
        </div>
      </section>

      <div style={{
        marginTop: 60,
        paddingTop: 40,
        borderTop: '1px solid #1f1f1f',
        textAlign: 'center',
        color: '#666',
        fontSize: 14
      }}>
        <p>
          © {new Date().getFullYear()} Elan Noir. Todos os direitos reservados.
        </p>
        <p style={{ marginTop: 8 }}>
          CNPJ: XX.XXX.XXX/XXXX-XX
        </p>
      </div>
    </div>
  );
}