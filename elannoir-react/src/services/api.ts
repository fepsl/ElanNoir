// elannoir-react/src/services/api.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Base URL da API - ajuste conforme seu ambiente
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Criar instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token JWT em todas as requisições
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError) => {
    // Se receber 401, limpar token e redirecionar para login
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirecionar apenas se não estiver já na página de login
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Tipos para as requisições e respostas
export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  complement?: string;
}

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  product: {
    id: string; // slug
    name: string;
    price: number;
    imageUrl?: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  total: number;
  status: string;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderPayload {
  items: Array<{
    slug: string;
    quantity: number;
  }>;
  shippingAddress: ShippingAddress;
  paymentMethod?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
  };
  token: string;
}

export interface UpdateProfileData {
  name: string;
}

export interface UpdatePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}

// Helper para extrair mensagem de erro
const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (axios.isAxiosError(error) && error.response) {
    return (error.response.data as any)?.message || defaultMessage;
  }
  return defaultMessage;
};

// Funções de autenticação
export const ordersAPI = {
  create: async (payload: CreateOrderPayload): Promise<Order> => {
    const response = await api.post('/orders/create', payload);
    return response.data;
  },

  getMyOrders: async (): Promise<Order[]> => {
    const response = await api.get('/orders/my-orders');
    return response.data;
  },

  getById: async (orderId: string): Promise<Order> => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  }
};

export const authAPI = {
  // Registrar novo usuário
  register: async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/api/auth/register', data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao registrar usuário'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },

  // Fazer login
  login: async (data: LoginData): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/api/auth/login', data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao fazer login'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },

  // Obter dados do usuário atual
  getMe: async () => {
    try {
      const response = await api.get('/api/auth/me');
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao buscar dados do usuário'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },

  // Atualizar perfil
  updateProfile: async (data: UpdateProfileData) => {
    try {
      const response = await api.put('/api/auth/profile', data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao atualizar perfil'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },

  // Atualizar senha
  updatePassword: async (data: UpdatePasswordData) => {
    try {
      const response = await api.put('/api/auth/password', data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao atualizar senha'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },
};

// Funções de produtos (para implementação futura)
export const productsAPI = {
  // Listar todos os produtos
  getAll: async () => {
    try {
      const response = await api.get('/api/products');
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao buscar produtos'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },

  // Obter produto por ID
  getById: async (id: string) => {
    try {
      const response = await api.get(`/api/products/${id}`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          message: getErrorMessage(error, 'Erro ao buscar produto'),
          statusCode: error.response.status,
        } as ApiError;
      }
      throw { message: 'Erro de conexão com o servidor' } as ApiError;
    }
  },
};

// Exportar instância do axios para uso direto quando necessário
export default api;