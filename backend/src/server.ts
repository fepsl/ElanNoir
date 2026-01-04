import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// TODO: Import routes aqui depois de criar
// import authRoutes from './routes/auth.routes';
// import productRoutes from './routes/product.routes';
// import orderRoutes from './routes/order.routes';
// import reviewRoutes from './routes/review.routes';
// import couponRoutes from './routes/coupon.routes';
// import newsletterRoutes from './routes/newsletter.routes';

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/reviews', reviewRoutes);
// app.use('/api/coupons', couponRoutes);
// app.use('/api/newsletter', newsletterRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: {
      message: 'Rota não encontrada',
      status: 404
    }
  });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Erro:', err);

  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Erro interno do servidor',
      status: err.status || 500,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════╗
║   🚀 Elan Noir API                ║
║   📡 Porta: ${PORT.toString().padEnd(23)}║
║   🌍 Ambiente: ${(process.env.NODE_ENV || 'development').padEnd(17)}║
║   ✅ Servidor rodando!             ║
╚════════════════════════════════════╝
  `);
  console.log(`📝 Acesse: http://localhost:${PORT}/health`);
  console.log('');
});

export default app;