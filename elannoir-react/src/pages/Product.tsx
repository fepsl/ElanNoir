import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Ruler } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import SizeGuide from '../components/SizeGuide';
import ProductGallery from '../components/ProductGallery';
import type { Size } from '../types';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  
  const [size, setSize] = useState<Size | ''>('');
  const [adding, setAdding] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) {
    return (
      <div style={{ 
        padding: 40, 
        textAlign: 'center',
        color: '#f2f2f2'
      }}>
        <p>Produto não encontrado</p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: 20,
            padding: '12px 24px',
            border: '1px solid #f2f2f2',
            background: 'transparent',
            color: '#f2f2f2',
            cursor: 'pointer'
          }}
        >
          Voltar para home
        </button>
      </div>
    );
  }

  async function handleAdd() {
    if (!size) {
      alert('Selecione um tamanho');
      return;
    }

    if (!product) return;

    setAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      size: size as Size,
      quantity: 1
    });
    
    setAdding(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  }

  return (
    <div style={{ 
      padding: 40, 
      maxWidth: 1200, 
      margin: 'auto' 
    }}>
      <SizeGuide
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
        productType={product.id as 'camiseta' | 'moletom' | 'jaqueta'}
      />

      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          color: '#f2f2f2',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 30,
          fontSize: 14
        }}
      >
        <ChevronLeft size={20} />
        Voltar
      </button>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: 60 
      }}>
        {/* Image Gallery */}
        <ProductGallery 
          images={product.images || [product.image]}
        />

        {/* Details */}
        <div>
          <h1 style={{ 
            fontSize: 36, 
            marginBottom: 16, 
            fontWeight: 600,
            color: '#f2f2f2'
          }}>
            {product.name}
          </h1>
          
          <p style={{ 
            fontSize: 28, 
            marginBottom: 24, 
            fontWeight: 600,
            color: '#f2f2f2'
          }}>
            R$ {product.price.toFixed(2)}
          </p>
          
          <p style={{ 
            opacity: 0.8, 
            marginBottom: 40, 
            lineHeight: 1.6,
            color: '#f2f2f2'
          }}>
            {product.description}
          </p>

          {/* Size selector */}
          <div style={{ marginBottom: 30 }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: 12 
            }}>
              <label style={{ 
                fontWeight: 600,
                color: '#f2f2f2'
              }}>
                Tamanho
              </label>
              <button
                onClick={() => setShowSizeGuide(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f2f2f2',
                  cursor: 'pointer',
                  fontSize: 13,
                  textDecoration: 'underline',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  opacity: 0.8
                }}
              >
                <Ruler size={16} />
                Tabela de medidas
              </button>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {(['P', 'M', 'G'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  style={{
                    padding: '12px 24px',
                    border: size === s ? '2px solid #f2f2f2' : '1px solid #333',
                    background: size === s ? '#1a1a1a' : 'transparent',
                    color: '#f2f2f2',
                    cursor: 'pointer',
                    fontSize: 16,
                    fontWeight: size === s ? 600 : 400
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAdd}
            disabled={adding}
            style={{
              width: '100%',
              padding: '16px',
              border: 'none',
              background: success ? '#22c55e' : '#f2f2f2',
              color: success ? '#fff' : '#0e0e0e',
              cursor: adding ? 'not-allowed' : 'pointer',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 1,
              transition: 'all 0.3s ease'
            }}
          >
            {adding 
              ? 'ADICIONANDO...' 
              : success 
                ? '✓ ADICIONADO!' 
                : 'ADICIONAR AO CARRINHO'
            }
          </button>
        </div>
      </div>
    </div>
  );
}