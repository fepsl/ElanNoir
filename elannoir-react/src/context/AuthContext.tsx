import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { User } from '../types';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    // Simula chamada de API
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (!email || !password) {
      throw new Error('Email e senha obrigatórios');
    }
    
    const fakeUser: User = {
      id: '1',
      name: email.split('@')[0],
      email
    };
    
    setUser(fakeUser);
  }

  async function register(email: string, password: string) {
    // Simula chamada de API
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (!email || !password) {
      throw new Error('Email e senha obrigatórios');
    }
    
    if (password.length < 6) {
      throw new Error('A senha deve ter pelo menos 6 caracteres');
    }
    
    const newUser: User = {
      id: String(Date.now()),
      name: email.split('@')[0],
      email
    };
    
    setUser(newUser);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}