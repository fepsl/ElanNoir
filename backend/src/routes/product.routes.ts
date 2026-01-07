import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

function mapProduct(p: any) {
  return {
    id: p.slug,
    uuid: p.id,
    name: p.name,
    slug: p.slug,
    description: p.description,
    price: p.price,
    images: p.images,
    category: p.category,
    stock: p.stock,
    sizes: p.sizes,
    fabric: p.fabric,
    weight: p.weight,
    fit: p.fit,
    active: p.active,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt
  };
}

// GET /api/products - listar todos
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { active: true }
    });

    res.json(products.map(mapProduct));
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
});

// GET /api/products/:slug - detalhes
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await prisma.product.findUnique({
      where: { slug }
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json(mapProduct(product));
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

export default router;
