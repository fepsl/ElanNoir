import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'camiseta',
    name: 'Camiseta Noir Essential',
    price: 129.9,
    description: 'Camiseta premium em algodão egípcio com corte oversized. Design minimalista e atemporal.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop'
  },
  {
    id: 'moletom',
    name: 'Moletom Elan Oversized',
    price: 249.9,
    description: 'Moletom de moletinho premium com capuz. Conforto e estilo em uma peça única.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop'
  },
  {
    id: 'jaqueta',
    name: 'Jaqueta Urban Black',
    price: 349.9,
    description: 'Jaqueta corta-vento com tecnologia impermeável. Perfeita para o inverno urbano.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop'
  }
];