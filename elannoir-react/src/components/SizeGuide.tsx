// src/components/SizeGuide.tsx

import { X, Ruler } from 'lucide-react';

type SizeGuideProps = {
  isOpen: boolean;
  onClose: () => void;
  productType: 'camiseta' | 'moletom' | 'jaqueta';
};

const sizeData = {
  camiseta: {
    title: 'Tabela de Tamanhos - Camisetas',
    sizes: [
      { size: 'P', chest: '92-96', length: '68', shoulder: '42' },
      { size: 'M', chest: '98-102', length: '70', shoulder: '44' },
      { size: 'G', chest: '104-108', length: '72', shoulder: '46' },

    ],
    modelInfo: 'O modelo veste tamanho M e tem 1,80m de altura',
    fabric: '100% Algodão Egípcio Premium - 180g/m²',
    fit: 'Corte oversized para máximo conforto'
  },
  moletom: {
    title: 'Tabela de Tamanhos - Moletom',
    sizes: [
      { size: 'P', chest: '100-104', length: '66', shoulder: '50' },
      { size: 'M', chest: '106-110', length: '68', shoulder: '52' },
      { size: 'G', chest: '112-116', length: '70', shoulder: '54' },

    ],
    modelInfo: 'O modelo veste tamanho M e tem 1,80m de altura',
    fabric: 'Moletom premium com interior flanelado - 320g/m²',
    fit: 'Corte oversized com capuz reforçado'
  },
  jaqueta: {
    title: 'Tabela de Tamanhos - Jaqueta',
    sizes: [
      { size: 'P', chest: '98-102', length: '64', shoulder: '44' },
      { size: 'M', chest: '104-108', length: '66', shoulder: '46' },
      { size: 'G', chest: '110-114', length: '68', shoulder: '48' },

    ],
    modelInfo: 'O modelo veste tamanho M e tem 1,80m de altura',
    fabric: 'Nylon impermeável com forro térmico',
    fit: 'Corte regular com ajuste na cintura'
  }
};

export default function SizeGuide({ isOpen, onClose, productType }: SizeGuideProps) {
  const data = sizeData[productType];

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: 8,
          maxWidth: 700,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          padding: 40,
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'none',
            border: 'none',
            color: '#f2f2f2',
            cursor: 'pointer',
            padding: 8
          }}
        >
          <X size={24} />
        </button>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
          <Ruler size={28} color="#f2f2f2" />
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#f2f2f2' }}>
            {data.title}
          </h2>
        </div>

        {/* Size table */}
        <div style={{ overflowX: 'auto', marginBottom: 30 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#f2f2f2', fontWeight: 600 }}>
                  Tamanho
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#f2f2f2', fontWeight: 600 }}>
                  Tórax (cm)
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#f2f2f2', fontWeight: 600 }}>
                  Comprimento (cm)
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'center', color: '#f2f2f2', fontWeight: 600 }}>
                  Ombro (cm)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.sizes.map((row, idx) => (
                <tr
                  key={row.size}
                  style={{
                    borderBottom: '1px solid #2a2a2a',
                    background: idx % 2 === 0 ? 'transparent' : '#0e0e0e'
                  }}
                >
                  <td style={{ padding: '12px 16px', color: '#f2f2f2', fontWeight: 600 }}>
                    {row.size}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#ccc' }}>
                    {row.chest}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#ccc' }}>
                    {row.length}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'center', color: '#ccc' }}>
                    {row.shoulder}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to measure */}
        <div style={{ background: '#0e0e0e', padding: 20, borderRadius: 4, marginBottom: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#f2f2f2' }}>
            📏 Como medir corretamente
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • <strong>Tórax:</strong> Meça a circunferência na parte mais larga do peito
            </li>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • <strong>Comprimento:</strong> Do ponto mais alto do ombro até a barra
            </li>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • <strong>Ombro:</strong> De uma costura de ombro à outra
            </li>
          </ul>
        </div>

        {/* Product details */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#f2f2f2' }}>
            ℹ️ Informações do Produto
          </h3>
          <p style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
            <strong>Modelagem:</strong> {data.fit}
          </p>
          <p style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
            <strong>Tecido:</strong> {data.fabric}
          </p>
          <p style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
            <strong>Modelo:</strong> {data.modelInfo}
          </p>
        </div>

        {/* Care instructions */}
        <div style={{ background: '#0e0e0e', padding: 20, borderRadius: 4 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#f2f2f2' }}>
            🧼 Instruções de Lavagem
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • Lavar à mão ou máquina (ciclo delicado)
            </li>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • Temperatura máxima: 30°C
            </li>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • Não usar alvejante
            </li>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • Secar à sombra
            </li>
            <li style={{ marginBottom: 8, color: '#ccc', fontSize: 14 }}>
              • Passar em temperatura baixa
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 30, textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 12 }}>
            Ainda com dúvidas sobre o tamanho?
          </p>
          <button
            onClick={() => {
              alert('Entre em contato: contato@elannoir.com');
            }}
            style={{
              padding: '12px 24px',
              border: '1px solid #f2f2f2',
              background: 'transparent',
              color: '#f2f2f2',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600
            }}
          >
            Fale com a gente
          </button>
        </div>
      </div>
    </div>
  );
}