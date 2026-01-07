import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();
const prisma = new PrismaClient();

// Create order from cart
router.post('/create', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { items, shippingAddress, paymentMethod } = req.body;

    // Validate items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Cart items are required' });
    }

    // Validate shipping address
    if (!shippingAddress || !shippingAddress.street || !shippingAddress.city || 
        !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.country) {
      return res.status(400).json({ error: 'Complete shipping address is required' });
    }

    // Calculate total and verify products exist
    let total = 0;
    const orderItems: any[] = [];

    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { slug: item.slug }
      });

      if (!product) {
        return res.status(404).json({ error: `Product not found: ${item.slug}` });
      }

      const quantity = Number(item.quantity) || 0;
      if (quantity <= 0) {
        return res.status(400).json({ error: 'Invalid quantity' });
      }

      const itemTotal = product.price * quantity;
      total += itemTotal;

      orderItems.push({
        productId: product.id,
        size: item.size ?? 'U',
        quantity,
        price: product.price
      });
    }

    // Create order with items
    const order = await prisma.order.create({
      data: ({
        userId,
        subtotal: total,
        shippingCost: 0,
        total,
        status: 'PENDING',
        shippingAddress: JSON.stringify(shippingAddress),
        paymentMethod: paymentMethod || 'pending',
        items: {
          create: orderItems as any
        }
      } as any),
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    // Map response to use slugs
    const o: any = order;
    const itemsMapped = (o.items || []).map((item: any) => ({
      ...item,
      product: {
        ...item.product,
        uuidid: item.product.id,
        id: item.product.slug
      }
    }));

    const response = {
      ...o,
      items: itemsMapped
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get user's orders
router.get('/my-orders', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;

    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Map products to use slugs and safely parse shippingAddress
    const response = orders.map(o => {
      const anyO: any = o;
      const shipping = typeof anyO.shippingAddress === 'string' ? JSON.parse(anyO.shippingAddress) : anyO.shippingAddress;
      const items = (anyO.items || []).map((item: any) => ({
        ...item,
        product: {
          ...item.product,
          uuidid: item.product.id,
          id: item.product.slug
        }
      }));
      return {
        ...anyO,
        shippingAddress: shipping,
        items
      };
    });

    res.json(response);
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Get specific order
router.get('/:orderId', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { orderId } = req.params;

    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
        userId
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const anyOrder: any = order;
    const shipping = typeof anyOrder.shippingAddress === 'string' ? JSON.parse(anyOrder.shippingAddress) : anyOrder.shippingAddress;
    const items = (anyOrder.items || []).map((item: any) => ({
      ...item,
      product: {
        ...item.product,
        uuidid: item.product.id,
        id: item.product.slug
      }
    }));
    const response = {
      ...anyOrder,
      shippingAddress: shipping,
      items
    };

    res.json(response);
  } catch (error) {
    console.error('Fetch order error:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

export default router;