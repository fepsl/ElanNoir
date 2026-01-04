import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfService />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <div style={{ padding: 40, textAlign: 'center', color: '#f2f2f2' }}>
                  <h1>Checkout</h1>
                  <p>Página em construção 🚧</p>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}