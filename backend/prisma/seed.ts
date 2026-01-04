import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.review.deleteMany();
  await prisma.address.deleteMany();
  await prisma.product.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.newsletter.deleteMany();
  await prisma.user.deleteMany();

  // Criar produtos
  console.log('📦 Criando produtos...');
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Camiseta Noir Essential',
        slug: 'camiseta-noir-essential',
        description: 'Camiseta premium em algodão egípcio com corte oversized. Design minimalista e atemporal.',
        price: 129.9,
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
          'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop'
        ],
        category: 'camisetas',
        stock: 50,
        sizes: ['P', 'M', 'G', 'GG'],
        fabric: '100% Algodão Egípcio',
        weight: '180g/m²',
        fit: 'Oversized',
        active: true
      },
      {
        name: 'Moletom Elan Oversized',
        slug: 'moletom-elan-oversized',
        description: 'Moletom de moletinho premium com capuz. Conforto e estilo em uma peça única.',
        price: 249.9,
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
          'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop'
        ],
        category: 'moletons',
        stock: 30,
        sizes: ['P', 'M', 'G', 'GG'],
        fabric: '80% Algodão / 20% Poliéster',
        weight: '320g/m²',
        fit: 'Oversized',
        active: true
      },
      {
        name: 'Jaqueta Urban Black',
        slug: 'jaqueta-urban-black',
        description: 'Jaqueta corta-vento com tecnologia impermeável. Perfeita para o inverno urbano.',
        price: 349.9,
        images: [
          'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop',
          'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=800&fit=crop'
        ],
        category: 'jaquetas',
        stock: 20,
        sizes: ['P', 'M', 'G', 'GG'],
        fabric: '100% Nylon Ripstop',
        weight: '150g/m²',
        fit: 'Regular',
        active: true
      }
    ]
  });
  console.log(`✅ ${products.count} produtos criados`);

  // Criar cupons
  console.log('🎟️  Criando cupons...');
  const coupons = await prisma.coupon.createMany({
    data: [
      {
        code: 'PRIMEIRA10',
        discount: 10,
        minValue: 0,
        maxUses: 1000,
        active: true
      },
      {
        code: 'FRETEGRATIS',
        discount: 0,
        minValue: 200,
        active: true
      },
      {
        code: 'BEMVINDO15',
        discount: 15,
        minValue: 100,
        maxUses: 500,
        active: true
      }
    ]
  });
  console.log(`✅ ${coupons.count} cupons criados`);

  // Criar usuário teste
  console.log('👤 Criando usuário teste...');
  const hashedPassword = await bcrypt.hash('123456', 10);
  const user = await prisma.user.create({
    data: {
      email: 'teste@elannoir.com',
      password: hashedPassword,
      name: 'Usuário Teste'
    }
  });
  console.log(`✅ Usuário criado: ${user.email}`);

  console.log('');
  console.log('🎉 Seed concluído com sucesso!');
  console.log('');
  console.log('📝 Dados criados:');
  console.log(`   - 3 produtos`);
  console.log(`   - 3 cupons (PRIMEIRA10, FRETEGRATIS, BEMVINDO15)`);
  console.log(`   - 1 usuário (teste@elannoir.com / senha: 123456)`);
  console.log('');
}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });