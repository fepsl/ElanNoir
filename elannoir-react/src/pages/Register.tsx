import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await register(email, password);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao registrar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }}>
      <div style={{
        maxWidth: 400,
        width: '100%',
        border: '1px solid #1f1f1f',
        padding: 40
      }}>
        <h2 style={{ 
          fontSize: 28, 
          marginBottom: 30, 
          fontWeight: 600,
          color: '#f2f2f2'
        }}>
          Criar Conta
        </h2>
        
        {error && (
          <div style={{
            padding: 12,
            background: '#ff444420',
            border: '1px solid #ff4444',
            color: '#ff4444',
            marginBottom: 20,
            fontSize: 14
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontSize: 14,
              color: '#f2f2f2'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: 12,
                background: '#0e0e0e',
                border: '1px solid #333',
                color: '#f2f2f2',
                fontSize: 14
              }}
            />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 8, 
              fontSize: 14,
              color: '#f2f2f2'
            }}>
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: '100%',
                padding: 12,
                background: '#0e0e0e',
                border: '1px solid #333',
                color: '#f2f2f2',
                fontSize: 14
              }}
            />
          </div>

          <p style={{ 
            fontSize: 12, 
            opacity: 0.6, 
            marginBottom: 24,
            color: '#f2f2f2'
          }}>
            Mínimo de 6 caracteres
          </p>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: 14,
              border: 'none',
              background: loading ? '#333' : '#f2f2f2',
              color: loading ? '#999' : '#0e0e0e',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1
            }}
          >
            {loading ? 'REGISTRANDO...' : 'CRIAR CONTA'}
          </button>
        </form>

        <p style={{ 
          marginTop: 24, 
          textAlign: 'center', 
          fontSize: 14, 
          opacity: 0.7,
          color: '#f2f2f2'
        }}>
          Já tem conta?{' '}
          <Link
            to="/login"
            style={{
              color: '#f2f2f2',
              textDecoration: 'underline'
            }}
          >
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}