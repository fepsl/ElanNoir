import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ordersAPI, Order } from '../services/api';

const OrderDetail: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/orders');
      return;
    }

    const fetchOrder = async () => {
      if (!orderId) return;

      try {
        const data = await ordersAPI.getById(orderId);
        setOrder(data);
      } catch (err: any) {
        console.error('Fetch order error:', err);
        setError(err.response?.data?.error || 'Failed to load order');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, user, navigate]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED':
        return 'bg-blue-100 text-blue-800';
      case 'SHIPPED':
        return 'bg-purple-100 text-purple-800';
      case 'DELIVERED':
        return 'bg-green-100 text-green-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">Loading order details...</div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error || 'Order not found'}
        </div>
        <button
          onClick={() => navigate('/orders')}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
        >
          Back to Orders
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/orders')}
        className="text-gray-600 hover:text-black mb-6 flex items-center"
      >
        ← Back to Orders
      </button>

      <div className="bg-white border rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Order #{order.id.slice(0, 8)}</h1>
            <p className="text-gray-600">{formatDate(order.createdAt)}</p>
          </div>
          <span className={`px-4 py-2 rounded-full font-medium ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
        </div>

        {/* Order Items */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Items</h2>
          <div className="space-y-4">
            {order.items.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  {item.product.imageUrl && (
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Unit Price: R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <div className="bg-gray-50 p-4 rounded">
            <p>{order.shippingAddress.street}</p>
            {order.shippingAddress.complement && <p>{order.shippingAddress.complement}</p>}
            <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
            <p>{order.shippingAddress.zipCode}</p>
            <p>{order.shippingAddress.country}</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="bg-gray-50 p-4 rounded">
            <p className="capitalize">{order.paymentMethod.replace('_', ' ')}</p>
          </div>
        </div>

        {/* Total */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span>R$ {order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;