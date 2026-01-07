import { createContext, useContext, useState, useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import type { CartItem } from '../types';

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, qty: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: CartItem) {
    setItems(prev => {
      const existing = prev.find(
        i => i.id === item.id && i.size === item.size
      );
      
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      
      return [...prev, item];
    });
  }

  function removeItem(id: string, size: string) {
    setItems(prev =>
      prev.filter(item => !(item.id === id && item.size === size))
    );
  }

  function updateQuantity(id: string, size: string, qty: number) {
    if (qty <= 0) {
      removeItem(id, size);
      return;
    }
    
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return context;
}
// Note: helper removed — use `total` value exposed by the context instead.