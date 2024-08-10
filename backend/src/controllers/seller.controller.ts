import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class SellerController {
  public async readAll(req: Request, res: Response) {
    try {
      const sellers = await prisma.seller.findMany({
        include: {
          user: true,
          products: true,
        }
      });
      return res.status(200).json(sellers);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo vendedores",
        error
      });
    }
  }

  public async read(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const seller = await prisma.seller.findUnique({
        where: { userId: Number(userId) },
        include: {
          user: true,
          products: true,
        }
      });
      return res.status(200).json(seller);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo vendedor",
        error
      });
    }
  }
}

export const sellerController = new SellerController();

