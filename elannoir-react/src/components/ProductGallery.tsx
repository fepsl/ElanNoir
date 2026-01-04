// src/components/ProductGallery.tsx
import { useState } from 'react';
import {ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setIsZoomed(false);
  };

  // Adicionar listener de teclado
  useState(() => {
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Main Image */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 600,
            border: '1px solid #1f1f1f',
            overflow: 'hidden',
            cursor: isZoomed ? 'zoom-out' : 'zoom-in',
            background: '#0a0a0a'
          }}
          onClick={() => setIsZoomed(!isZoomed)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: isZoomed ? '200%' : 'cover',
              backgroundPosition: isZoomed 
                ? `${mousePosition.x}% ${mousePosition.y}%` 
                : 'center',
              backgroundRepeat: 'no-repeat',
              transition: isZoomed ? 'none' : 'background-size 0.3s ease'
            }}
          />

          {/* Zoom indicator */}
          {!isZoomed && (
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                background: 'rgba(0, 0, 0, 0.7)',
                padding: '8px 12px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: '#f2f2f2',
                fontSize: 13,
                pointerEvents: 'none'
              }}
            >
              <ZoomIn size={16} />
              Clique para ampliar
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                color: '#f2f2f2',
                width: 40,
                height: 40,
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                color: '#f2f2f2',
                width: 40,
                height: 40,
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              background: 'rgba(0, 0, 0, 0.7)',
              padding: '6px 12px',
              borderRadius: 4,
              color: '#f2f2f2',
              fontSize: 13,
              pointerEvents: 'none'
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(images.length, 5)}, 1fr)`,
            gap: 12
          }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              style={{
                width: '100%',
                height: 100,
                border: currentIndex === index ? '2px solid #f2f2f2' : '1px solid #333',
                background: 'transparent',
                cursor: 'pointer',
                padding: 0,
                overflow: 'hidden',
                opacity: currentIndex === index ? 1 : 0.6,
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.borderColor = '#666';
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.opacity = '0.6';
                  e.currentTarget.style.borderColor = '#333';
                }
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen zoom hint */}
      {isZoomed && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '12px 20px',
            borderRadius: 4,
            color: '#f2f2f2',
            fontSize: 14,
            zIndex: 1000,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          <ZoomIn size={16} />
          Mova o mouse para explorar • Clique para sair
        </div>
      )}
    </div>
  );
}