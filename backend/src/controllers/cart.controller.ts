import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class CartController {

  public async create(req: Request, res: Response) {
    const { userId, totalPrice, quantity } = req.body;

    try {
      const newCart = await prisma.cart.create({
        data: { userId, totalPrice, quantity }
      });
      return res.status(201).json(newCart);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro criando carrinho", error });
    }
  }

  public async read(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const cart = await prisma.cart.findUnique({
        where: { userId: Number(userId) },
        include: { onTheCartOf: true }
      });
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro lendo carrinho", error });
    }
  }

  public async delete(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      await prisma.cart.delete({ where: { userId: Number(userId) } });
      return res.status(200).json({ message: "Carrinho deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ messageError: "Erro deletando carrinho", error });
    }
  }
}

export const cartController = new CartController();

