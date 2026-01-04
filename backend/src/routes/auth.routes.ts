import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();
const prisma = new PrismaClient();

// Schemas de validação
const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres')
});

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string()
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = registerSchema.parse(req.body);

    // Verificar se email já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({
        error: 'Email já cadastrado'
      });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      }
    });

    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.status(201).json({
      user,
      token
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: error.errors[0].message
      });
    }

    console.error('Erro no registro:', error);
    res.status(500).json({
      error: 'Erro ao criar conta'
    });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({
        error: 'Email ou senha incorretos'
      });
    }

    // Verificar senha
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        error: 'Email ou senha incorretos'
      });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt
      },
      token
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: error.errors[0].message
      });
    }

    console.error('Erro no login:', error);
    res.status(500).json({
      error: 'Erro ao fazer login'
    });
  }
});

// GET /api/auth/me
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      }
    });

    if (!user) {
      return res.status(404).json({
        error: 'Usuário não encontrado'
      });
    }

    res.json({ user });
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({
      error: 'Erro ao buscar usuário'
    });
  }
});

// PUT /api/auth/profile
router.put('/profile', authenticate, async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        error: 'Nome inválido'
      });
    }

    const user = await prisma.user.update({
      where: { id: req.userId },
      data: { name: name.trim() },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true
      }
    });

    res.json({ user });
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).json({
      error: 'Erro ao atualizar perfil'
    });
  }
});

// PUT /api/auth/password
router.put('/password', authenticate, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({
        error: 'Nova senha deve ter no mínimo 6 caracteres'
      });
    }

    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { id: req.userId }
    });

    if (!user) {
      return res.status(404).json({
        error: 'Usuário não encontrado'
      });
    }

    // Verificar senha atual
    const validPassword = await bcrypt.compare(currentPassword, user.password);

    if (!validPassword) {
      return res.status(401).json({
        error: 'Senha atual incorreta'
      });
    }

    // Hash nova senha
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Atualizar senha
    await prisma.user.update({
      where: { id: req.userId },
      data: { password: hashedPassword }
    });

    res.json({
      message: 'Senha alterada com sucesso'
    });
  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    res.status(500).json({
      error: 'Erro ao alterar senha'
    });
  }
});

export default router;