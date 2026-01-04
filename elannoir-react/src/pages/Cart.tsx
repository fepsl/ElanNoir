import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Cart() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div style={{ 
        padding: 80, 
        textAlign: 'center' 
      }}>
        <ShoppingCart 
          size={64} 
          style={{ 
            margin: '0 auto 20px', 
            opacity: 0.3,
            color: '#f2f2f2'
          }} 
        />
        <h2 style={{ 
          marginBottom: 16,
          color: '#f2f2f2'
        }}>
          Seu carrinho está vazio
        </h2>
        <p style={{ 
          opacity: 0.7, 
          marginBottom: 30,
          color: '#f2f2f2'
        }}>
          Adicione produtos incríveis da nossa coleção!
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 32px',
            border: '1px solid #f2f2f2',
            background: 'transparent',
            color: '#f2f2f2',
            cursor: 'pointer',
            fontSize: 14,
            letterSpacing: 1
          }}
        >
          CONTINUAR COMPRANDO
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: 40, 
      maxWidth: 1200, 
      margin: 'auto' 
    }}>
      <h1 style={{ 
        fontSize: 36, 
        marginBottom: 40, 
        fontWeight: 600,
        color: '#f2f2f2'
      }}>
        Carrinho
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '2fr 1fr', 
        gap: 40 
      }}>
        <div>
          {items.map(item => (
            <div
              key={`${item.id}-${item.size}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr auto',
                gap: 20,
                padding: 24,
                border: '1px solid #1f1f1f',
                marginBottom: 20
              }}
            >
              <div style={{
                width: 120,
                height: 120,
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />

              <div>
                <h3 style={{ 
                  fontSize: 18, 
                  marginBottom: 8, 
                  fontWeight: 600,
                  color: '#f2f2f2'
                }}>
                  {item.name}
                </h3>
                <p style={{ 
                  opacity: 0.7, 
                  marginBottom: 12, 
                  fontSize: 14,
                  color: '#f2f2f2'
                }}>
                  Tamanho: {item.size}
                </p>
                <p style={{ 
                  fontSize: 18, 
                  fontWeight: 600,
                  color: '#f2f2f2'
                }}>
                  R$ {item.price.toFixed(2)}
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 12, 
                alignItems: 'flex-end' 
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12, 
                  border: '1px solid #333', 
                  padding: 4 
                }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f2f2f2',
                      cursor: 'pointer',
                      padding: 8
                    }}
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span style={{ 
                    minWidth: 30, 
                    textAlign: 'center', 
                    fontWeight: 600,
                    color: '#f2f2f2'
                  }}>
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f2f2f2',
                      cursor: 'pointer',
                      padding: 8
                    }}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id, item.size)}
                  style={{
                    background: 'none',
                    border: '1px solid #ff4444',
                    color: '#ff4444',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  <Trash2 size={14} />
                  Remover
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            style={{
              background: 'none',
              border: '1px solid #444',
              color: '#f2f2f2',
              padding: '12px 24px',
              cursor: 'pointer',
              fontSize: 14
            }}
          >
            Limpar carrinho
          </button>
        </div>

        <div style={{ 
          border: '1px solid #1f1f1f', 
          padding: 30, 
          height: 'fit-content' 
        }}>
          <h3 style={{ 
            fontSize: 24, 
            marginBottom: 30, 
            fontWeight: 600,
            color: '#f2f2f2'
          }}>
            Resumo
          </h3>
          
          <div style={{ 
            marginBottom: 20, 
            paddingBottom: 20, 
            borderBottom: '1px solid #1f1f1f' 
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: 12,
              color: '#f2f2f2'
            }}>
              <span style={{ opacity: 0.7 }}>Subtotal</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: 12,
              color: '#f2f2f2'
            }}>
              <span style={{ opacity: 0.7 }}>Frete</span>
              <span style={{ color: '#22c55e' }}>Grátis</span>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: 30, 
            fontSize: 20, 
            fontWeight: 600,
            color: '#f2f2f2'
          }}>
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => {
              if (!user) {
                alert('Faça login para finalizar a compra');
                navigate('/login');
              } else {
                alert('Checkout em construção! 🚧');
              }
            }}
            style={{
              width: '100%',
              padding: 16,
              border: 'none',
              background: '#f2f2f2',
              color: '#0e0e0e',
              cursor: 'pointer',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 1
            }}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </div>
  );
}