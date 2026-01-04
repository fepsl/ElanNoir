export type User = {
  id: string;
  name: string;
  email: string;
};

export type Size = 'P' | 'M' | 'G';

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images?: string[]; // Array de múltiplas imagens
};

export type CartItem = Product & {
  size: Size;
  quantity: number;
};