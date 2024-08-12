import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class ProductOnCartController {

  public async create(req: Request, res: Response) {
    const { cartId, productId, quantity } = req.body;

    try {
      const newProductOnCart = await prisma.productOnCart.create({
        data: { cartId, productId, quantity }
      });
      return res.status(201).json(newProductOnCart);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro criando produto no carrinho", error });
    }
  }

  public async delete(req: Request, res: Response) {
    const { cartId, productId } = req.params;

    try {
      await prisma.productOnCart.delete({
        where: { cartId_productId: { cartId: Number(cartId), productId: Number(productId) } }
      });
      return res.status(200).json({ message: "Produto no carrinho deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ messageError: "Erro deletando produto no carrinho", error });
    }
  }
}

export const productOnCartController = new ProductOnCartController();

