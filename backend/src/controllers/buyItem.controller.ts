import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class BuyItemController {

  public async create(req: Request, res: Response) {
    const { orderId, productId, quantity, unitaryPrice } = req.body;

    try {
      const newBuyItem = await prisma.buyItem.create({
        data: { orderId, productId, quantity, unitaryPrice }
      });
      return res.status(201).json(newBuyItem);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro criando item de compra", error });
    }
  }

  public async read(req: Request, res: Response) {
    const { orderId, productId } = req.params;

    try {
      const buyItem = await prisma.buyItem.findUnique({
        where: { orderId_productId: { orderId: Number(orderId), productId: Number(productId) } }
      });
      return res.status(200).json(buyItem);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro lendo item de compra", error });
    }
  }

  public async delete(req: Request, res: Response) {
    const { orderId, productId } = req.params;

    try {
      await prisma.buyItem.delete({
        where: { orderId_productId: { orderId: Number(orderId), productId: Number(productId) } }
      });
      return res.status(200).json({ message: "Item de compra deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ messageError: "Erro deletando item de compra", error });
    }
  }
}

export const buyItemController = new BuyItemController();

