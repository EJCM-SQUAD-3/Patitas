import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { sendEmail } from "../config/mailer";

const prisma = new PrismaClient();

class OrderController {

  public async create(req: Request, res: Response) {
    const { userId, status, items, totalPrice } = req.body;
    try {
      const newOrder = await prisma.order.create({
        data: {
          user: { connect: { id: userId } },  
          status,
          totalPrice,
          items: {
            create: items.map((item: any) => ({
              product: { connect: { id: item.productId } },
              quantity: item.quantity,
              unitaryPrice: item.unitaryPrice,
            }))
=======
    public async create(req: Request, res: Response) {
      const { status, items, totalPrice } = req.body;
      const idUser = req.user;
      try {
        const newOrder = await prisma.order.create({
          data: {
            user: { connect: { id: idUser } },
            status,
            totalPrice,
            items: {
              create: items.map((item: any) => ({
                product: { connect: { id: item.productId } },
                quantity: item.quantity,
                unitaryPrice: item.unitaryPrice, 
              }))
            }

          }
        }
      });
      return res.status(201).json({
        message: "Pedido criado com sucesso",
        order: newOrder,
      });
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      return res.status(500).json({
        messageError: "Erro criando pedido",
      });
    }
  }

  public async readAll(req: Request, res: Response) {
    try {
      const orders = await prisma.order.findMany({
        include: {
          user: true,
          items: {
            include: {
              product: true
            }
          }
        }
      });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo pedidos",
        error
      });
    }
  }

  public async read(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const order = await prisma.order.findUnique({
        where: { id: Number(id) },
        include: {
          user: true,
          items: {
            include: {
              product: true
            }
          }
        }
      });

      if (order) {
        const emailToBeSendedTo = order.user.email;
        const subject = 'Confirmação de Pedido';
        const itemsList = order.items.map(item => 
          `Produto: ${item.product.name}\nQuantidade: ${item.quantity}\nPreço Unitário: ${item.unitaryPrice}\n`
        ).join('\n');
        const messageText = `Seu pedido foi criado com sucesso!\n\nDetalhes do Pedido:\nTotal: ${order.totalPrice}\nItens:\n${itemsList}\n Patitas`;

        await sendEmail(emailToBeSendedTo, subject, messageText);
      }

      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro lendo pedido",
        error
      });
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const idUser = req.user;
    const { items, status, totalPrice } = req.body;

    try {
      const updatedOrder = await prisma.order.update({
        where: { id: Number(id), userId: idUser },
        data: {
          status,
          totalPrice,
          items: {
            update: items.map((item: any) => ({
              where: { id: item.id }, 
              data: {
                quantity: item.quantity,
                unitaryPrice: item.unitaryPrice
              }
            }))
          }
        },
        include: {
          user: true,
          items: {
            include: {
              product: true
            }
          }
        }
      });

      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(500).json({
        messageError: "Erro atualizando pedido",
        error
      });
    }
  }
}

export const orderController = new OrderController();
