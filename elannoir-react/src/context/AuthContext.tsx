// elannoir-react/src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, AuthResponse, RegisterData, LoginData, ApiError } from '../services/api';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (token) {
          // Verificar se o token ainda é válido buscando dados do usuário
          const userData = await authAPI.getMe();
          setUser({
            id: userData.id,
            name: userData.name,
            email: userData.email,
          });
        }
      } catch (error) {
        // Token inválido ou expirado, limpar storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      const loginData: LoginData = { email, password };
      const response: AuthResponse = await authAPI.login(loginData);
      
      // Salvar token e usuário
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      setUser({
        id: response.user.id,
        name: response.user.name,
        email: response.user.email,
      });
    } catch (error) {
      const apiError = error as ApiError;
      throw new Error(apiError.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      
      const registerData: RegisterData = { name, email, password };
      const response: AuthResponse = await authAPI.register(registerData);
      
      // Salvar token e usuário
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      setUser({
        id: response.user.id,
        name: response.user.name,
        email: response.user.email,
      });
    } catch (error) {
      const apiError = error as ApiError;
      throw new Error(apiError.message || 'Erro ao registrar usuário');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Limpar token e usuário
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}