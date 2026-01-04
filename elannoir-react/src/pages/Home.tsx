// src/pages/Home.tsx - VERSÃO MELHORADA
import { Link } from 'react-router-dom';
import { Truck, Shield, Repeat, Star } from 'lucide-react';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      {/* Hero Section Melhorada */}
      <section style={{
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(242, 242, 242, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div style={{ 
          textAlign: 'center', 
          padding: '0 40px',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            border: '1px solid #333',
            borderRadius: 20,
            marginBottom: 30,
            fontSize: 12,
            letterSpacing: 2,
            color: '#999'
          }}>
            COLEÇÃO 2026
          </div>

          <h1 style={{ 
            fontSize: 64, 
            fontWeight: 700, 
            marginBottom: 24,
            letterSpacing: -2,
            color: '#f2f2f2',
            lineHeight: 1.1
          }}>
            ELAN NOIR
          </h1>
          
          <p style={{ 
            fontSize: 20, 
            maxWidth: 600, 
            margin: '0 auto 40px', 
            color: '#999',
            lineHeight: 1.6
          }}>
            Streetwear premium minimalista.<br />
            Onde elegância encontra atitude urbana.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: 16, 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              style={{
                padding: '16px 40px',
                background: '#f2f2f2',
                border: 'none',
                color: '#0e0e0e',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 1.5,
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(242, 242, 242, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              EXPLORAR COLEÇÃO
            </button>

            <Link
              to="/sobre"
              style={{
                padding: '16px 40px',
                background: 'transparent',
                border: '1px solid #333',
                color: '#f2f2f2',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 1.5,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#f2f2f2';
                e.currentTarget.style.background = 'rgba(242, 242, 242, 0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              NOSSA HISTÓRIA
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: '#666',
          fontSize: 12
        }}>
          <span>SCROLL</span>
          <div style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, #666, transparent)',
            animation: 'scroll 2s infinite'
          }} />
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 40px',
        background: '#0a0a0a',
        borderTop: '1px solid #1a1a1a'
      }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 40
        }}>
          {[
            { icon: Truck, title: 'Frete Grátis', desc: 'Em compras acima de R$ 200' },
            { icon: Shield, title: 'Compra Segura', desc: 'Pagamento 100% protegido' },
            { icon: Repeat, title: 'Troca Fácil', desc: '30 dias para trocar' },
            { icon: Star, title: 'Qualidade Premium', desc: 'Tecidos selecionados' }
          ].map((feature, idx) => (
            <div 
              key={idx}
              style={{ 
                textAlign: 'center',
                padding: 30,
                border: '1px solid #1a1a1a',
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
              <feature.icon 
                size={32} 
                style={{ 
                  margin: '0 auto 16px',
                  color: '#f2f2f2'
                }} 
              />
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 600,
                marginBottom: 8,
                color: '#f2f2f2'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                fontSize: 14,
                color: '#999',
                lineHeight: 1.5
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section 
        id="products" 
        style={{ 
          padding: '100px 40px', 
          maxWidth: 1200, 
          margin: 'auto' 
        }}
      >
        <div style={{ 
          textAlign: 'center',
          marginBottom: 60
        }}>
          <span style={{
            fontSize: 12,
            letterSpacing: 3,
            color: '#666',
            marginBottom: 16,
            display: 'block'
          }}>
            DESTAQUE
          </span>
          <h2 style={{ 
            fontSize: 42, 
            fontWeight: 700,
            marginBottom: 16,
            color: '#f2f2f2',
            letterSpacing: -1
          }}>
            Nossa Coleção
          </h2>
          <p style={{
            fontSize: 16,
            color: '#999',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            Peças cuidadosamente selecionadas para compor seu guarda-roupa urbano
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 40
        }}>
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{
                textDecoration: 'none',
                color: '#f2f2f2',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                marginBottom: 20
              }}>
                <div 
                  style={{
                    width: '100%',
                    height: 450,
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Quick View Button */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0';
                }}
                >
                  <button style={{
                    padding: '12px 32px',
                    background: '#f2f2f2',
                    border: 'none',
                    color: '#0e0e0e',
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 1,
                    cursor: 'pointer'
                  }}>
                    VER DETALHES
                  </button>
                </div>
              </div>
              
              <div style={{ padding: '0 8px' }}>
                <h3 style={{ 
                  fontSize: 18, 
                  marginBottom: 8, 
                  fontWeight: 600,
                  color: '#f2f2f2'
                }}>
                  {product.name}
                </h3>
                <p style={{ 
                  fontSize: 14,
                  color: '#666',
                  marginBottom: 12,
                  lineHeight: 1.5
                }}>
                  {product.description}
                </p>
                <span style={{ 
                  fontSize: 20, 
                  fontWeight: 700,
                  color: '#f2f2f2'
                }}>
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
        textAlign: 'center',
        borderTop: '1px solid #1a1a1a'
      }}>
        <h2 style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 20,
          color: '#f2f2f2'
        }}>
          Primeira compra?
        </h2>
        <p style={{
          fontSize: 18,
          color: '#999',
          marginBottom: 40,
          maxWidth: 600,
          margin: '0 auto 40px'
        }}>
          Cadastre-se e ganhe 10% OFF na sua primeira compra
        </p>
        <div style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          maxWidth: 500,
          margin: 'auto'
        }}>
          <input
            type="email"
            placeholder="Seu melhor email"
            style={{
              flex: 1,
              padding: '16px 24px',
              background: '#0e0e0e',
              border: '1px solid #333',
              color: '#f2f2f2',
              fontSize: 14
            }}
          />
          <button style={{
            padding: '16px 32px',
            background: '#f2f2f2',
            border: 'none',
            color: '#0e0e0e',
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1,
            cursor: 'pointer'
          }}>
            GANHAR 10% OFF
          </button>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}