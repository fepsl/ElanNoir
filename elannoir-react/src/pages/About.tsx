// src/pages/About.tsx
import { Heart, Target, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <div style={{ color: '#f2f2f2' }}>
      {/* Hero Section */}
      <section style={{
        padding: '120px 40px 80px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}>
        <span style={{
          display: 'inline-block',
          padding: '8px 20px',
          border: '1px solid #333',
          borderRadius: 20,
          marginBottom: 30,
          fontSize: 12,
          letterSpacing: 2,
          color: '#999'
        }}>
          NOSSA HISTÓRIA
        </span>

        <h1 style={{
          fontSize: 48,
          fontWeight: 700,
          marginBottom: 24,
          letterSpacing: -1
        }}>
          Elan Noir
        </h1>

        <p style={{
          fontSize: 20,
          maxWidth: 700,
          margin: '0 auto',
          lineHeight: 1.6,
          color: '#999'
        }}>
          Onde o minimalismo encontra o streetwear urbano. 
          Nascida das ruas, feita para quem não aceita menos que excepcional.
        </p>
      </section>

      {/* Story Section */}
      <section style={{
        padding: '100px 40px',
        maxWidth: 1200,
        margin: 'auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          marginBottom: 100
        }}>
          <div>
            <span style={{
              fontSize: 12,
              letterSpacing: 3,
              color: '#666',
              marginBottom: 16,
              display: 'block'
            }}>
              2024 · A ORIGEM
            </span>
            <h2 style={{
              fontSize: 36,
              fontWeight: 700,
              marginBottom: 24,
              lineHeight: 1.2
            }}>
              Nascida nas ruas,<br />
              forjada na essência
            </h2>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#ccc',
              marginBottom: 20
            }}>
              Elan Noir nasceu da frustração de não encontrar roupas que 
              unissem qualidade premium, design minimalista e autenticidade 
              urbana. Cansados de escolher entre fast fashion descartável e 
              marcas caras que não representavam nossa realidade.
            </p>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#ccc'
            }}>
              Decidimos criar algo diferente: peças atemporais que você 
              pode usar por anos, que contam histórias, que fazem parte da 
              sua identidade. Não seguimos tendências — criamos clássicos.
            </p>
          </div>

          <div style={{
            height: 500,
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: 14, color: '#666', letterSpacing: 2 }}>
              [FOTO: FUNDADORES / PROCESSO / CIDADE]
            </span>
          </div>
        </div>

        {/* Second Block - Inverted */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center'
        }}>
          <div style={{
            height: 500,
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: 14, color: '#666', letterSpacing: 2 }}>
              [FOTO: PRODUTO / DETALHES / PROCESSO]
            </span>
          </div>

          <div>
            <span style={{
              fontSize: 12,
              letterSpacing: 3,
              color: '#666',
              marginBottom: 16,
              display: 'block'
            }}>
              FILOSOFIA
            </span>
            <h2 style={{
              fontSize: 36,
              fontWeight: 700,
              marginBottom: 24,
              lineHeight: 1.2
            }}>
              Qualidade acima<br />
              de quantidade
            </h2>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#ccc',
              marginBottom: 20
            }}>
              Cada peça Elan Noir é pensada para durar. Selecionamos apenas 
              os melhores tecidos, trabalhamos com fornecedores que compartilham 
              nossos valores, e supervisionamos cada etapa da produção.
            </p>
            <p style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: '#ccc'
            }}>
              Não produzimos em massa. Nossas coleções são limitadas, 
              pensadas com cuidado, feitas para pessoas que valorizam 
              autenticidade e não apenas logos.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '100px 40px',
        background: '#0a0a0a',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 1200, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span style={{
              fontSize: 12,
              letterSpacing: 3,
              color: '#666',
              marginBottom: 16,
              display: 'block'
            }}>
              VALORES
            </span>
            <h2 style={{
              fontSize: 36,
              fontWeight: 700,
              marginBottom: 20
            }}>
              O que nos move
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40
          }}>
            {[
              {
                icon: Heart,
                title: 'Autenticidade',
                desc: 'Ser real, não seguir hype. Criar o que acreditamos, não o que vende mais.'
              },
              {
                icon: Target,
                title: 'Qualidade',
                desc: 'Cada detalhe importa. Do tecido à embalagem, nada é deixado ao acaso.'
              },
              {
                icon: Zap,
                title: 'Atemporalidade',
                desc: 'Peças que não saem de moda. Clássicos modernos que atravessam estações.'
              },
              {
                icon: Users,
                title: 'Comunidade',
                desc: 'Mais que clientes, uma comunidade de pessoas que compartilham valores.'
              }
            ].map((value, idx) => (
              <div
                key={idx}
                style={{
                  padding: 30,
                  border: '1px solid #1a1a1a',
                  textAlign: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#333';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <value.icon
                  size={40}
                  style={{ margin: '0 auto 20px', color: '#f2f2f2' }}
                />
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginBottom: 12
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#999'
                }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section style={{
        padding: '100px 40px',
        maxWidth: 800,
        margin: 'auto',
        textAlign: 'center'
      }}>
        <span style={{
          fontSize: 12,
          letterSpacing: 3,
          color: '#666',
          marginBottom: 16,
          display: 'block'
        }}>
          MANIFESTO
        </span>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 30,
          lineHeight: 1.3
        }}>
          Para quem não se<br />
          contenta com o comum
        </h2>

        <div style={{
          fontSize: 18,
          lineHeight: 1.8,
          color: '#ccc',
          textAlign: 'left'
        }}>
          <p style={{ marginBottom: 20 }}>
            Somos para quem busca peças que duram mais que uma estação. 
            Para quem valoriza qualidade sobre quantidade. Para quem 
            entende que menos é mais, mas esse menos precisa ser impecável.
          </p>
          <p style={{ marginBottom: 20 }}>
            Não fazemos roupas para impressionar. Fazemos roupas para 
            expressar. Para quem sabe que o verdadeiro luxo está no 
            conforto, na durabilidade, na atemporalidade.
          </p>
          <p style={{ marginBottom: 20 }}>
            Não somos para todo mundo. Somos para você que valoriza 
            autenticidade, que pesquisa antes de comprar, que prefere 
            ter menos peças mas cada uma com história e propósito.
          </p>
          <p>
            <strong style={{ color: '#f2f2f2' }}>
              Elan Noir. Essência urbana. Qualidade eterna.
            </strong>
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '100px 40px',
        background: '#0a0a0a',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ maxWidth: 1200, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={{
              fontSize: 12,
              letterSpacing: 3,
              color: '#666',
              marginBottom: 16,
              display: 'block'
            }}>
              PROCESSO
            </span>
            <h2 style={{
              fontSize: 36,
              fontWeight: 700,
              marginBottom: 20
            }}>
              Como criamos
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40
          }}>
            {[
              {
                step: '01',
                title: 'Design',
                desc: 'Cada coleção começa com pesquisa. Estudamos tendências, ouvimos nossa comunidade, mas criamos algo único e atemporal.'
              },
              {
                step: '02',
                title: 'Materiais',
                desc: 'Selecionamos apenas tecidos premium. Testamos tudo: toque, durabilidade, sustentabilidade. Só o melhor passa.'
              },
              {
                step: '03',
                title: 'Produção',
                desc: 'Trabalhamos com parceiros que compartilham nossos valores. Cada peça é supervisionada e aprovada individualmente.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: 20
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 16
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#999'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 20
        }}>
          Faça parte da nossa história
        </h2>
        <p style={{
          fontSize: 18,
          color: '#999',
          marginBottom: 40,
          maxWidth: 600,
          margin: '0 auto 40px'
        }}>
          Cada pessoa que veste Elan Noir se torna parte dessa jornada. 
          Explore nossa coleção e encontre sua próxima peça essencial.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            padding: '16px 40px',
            background: '#f2f2f2',
            border: 'none',
            color: '#0e0e0e',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1,
            cursor: 'pointer'
          }}
        >
          EXPLORAR COLEÇÃO
        </button>
      </section>
    </div>
  );
}