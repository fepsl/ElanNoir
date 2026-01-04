import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JWTPayload {
  userId: string;
  email: string;
}

// Estender o tipo Request do Express
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userEmail?: string;
    }
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: 'Token não fornecido'
      });
    }

    // Token vem como "Bearer TOKEN"
    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({
        error: 'Formato de token inválido'
      });
    }

    const token = parts[1];

    // Verificar token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JWTPayload;

    // Adicionar dados do usuário na request
    req.userId = decoded.userId;
    req.userEmail = decoded.email;

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        error: 'Token expirado'
      });
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        error: 'Token inválido'
      });
    }

    return res.status(401).json({
      error: 'Falha na autenticação'
    });
  }
}

// Middleware opcional - não bloqueia se não tiver token
export function optionalAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const parts = authHeader.split(' ');

      if (parts.length === 2 && parts[0] === 'Bearer') {
        const token = parts[1];
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET!
        ) as JWTPayload;

        req.userId = decoded.userId;
        req.userEmail = decoded.email;
      }
    }

    next();
  } catch (error) {
    // Continua mesmo se token inválido
    next();
  }
}