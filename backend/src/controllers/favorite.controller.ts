import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class FavoriteController {

  public async create(req: Request, res: Response) {
    const { buyerId, productId } = req.body;

    try {
      const newFavorite = await prisma.favorite.create({
        data: { buyerId, productId }
      });
      return res.status(201).json(newFavorite);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro criando favorito", error });
    }
  }

  public async read(req: Request, res: Response) {
    const { buyerId, productId } = req.params;

    try {
      const favorite = await prisma.favorite.findUnique({
        where: { buyerId_productId: { buyerId: Number(buyerId), productId: Number(productId) } }
      });
      return res.status(200).json(favorite);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro lendo favorito", error });
    }
  }

  public async delete(req: Request, res: Response) {
    const { buyerId, productId } = req.params;

    try {
      await prisma.favorite.delete({
        where: { buyerId_productId: { buyerId: Number(buyerId), productId: Number(productId) } }
      });
      return res.status(200).json({ message: "Favorito deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ messageError: "Erro deletando favorito", error });
    }
  }
}

export const favoriteController = new FavoriteController();

