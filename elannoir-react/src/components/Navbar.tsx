import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid #1f1f1f',
      background: '#0e0e0e',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link
        to="/"
        style={{
          color: '#f2f2f2',
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '3px',
          textDecoration: 'none'
        }}
      >
        ELAN NOIR
      </Link>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Link
          to="/carrinho"
          style={{
            color: '#f2f2f2',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: '14px'
          }}
        >
          <ShoppingCart size={20} />
          Carrinho ({count})
        </Link>

        {user ? (
          <>
            <span style={{ 
              fontSize: '14px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8,
              color: '#f2f2f2'
            }}>
              <User size={18} />
              {user.name}
            </span>
            <button
              onClick={logout}
              style={{
                background: 'none',
                border: '1px solid #333',
                color: '#f2f2f2',
                padding: '8px 16px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <LogOut size={16} />
              Sair
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                background: 'none',
                border: '1px solid #f2f2f2',
                color: '#f2f2f2',
                padding: '8px 20px',
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                background: '#f2f2f2',
                border: 'none',
                color: '#0e0e0e',
                padding: '8px 20px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Registrar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}