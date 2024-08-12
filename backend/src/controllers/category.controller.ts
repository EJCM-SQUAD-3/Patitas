import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class CategoryController {
  public async create(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const newCategory = await prisma.category.create({
        data: {
          name,
        }
      });
      return res.status(201).json({
        message: "Categoria criada com sucesso",
        product: newCategory,
      });
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro criando categoria",
        error
      });
    }
  }

  public async readAll(req: Request, res: Response) {
    try {
      const categories = await prisma.category.findMany();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo categorias",
        error
      });
    }
  }

  public async read(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const category = await prisma.category.findUnique({
        where: { id: Number(id) }
      });
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo categoria",
        error
      });
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const category = await prisma.category.update({
        where: { id: Number(id) },
        data: {
          name,
        }
      });
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro atualizando categoria",
        error
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const category = await prisma.category.delete({
        where: { id: Number(id) }
      });
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro deletando categoria",
        error
      });
    }
  }

}
export const categoryController = new CategoryController();
