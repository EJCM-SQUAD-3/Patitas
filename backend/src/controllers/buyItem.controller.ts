import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { sendEmail } from "../config/mailer"; 

const prisma = new PrismaClient();

class BuyItemController {

  public async create(req: Request, res: Response) {
    const { orderId, productId, quantity, unitaryPrice } = req.body;

    try {
    
      const newBuyItem = await prisma.buyItem.create({
        data: { orderId, productId, quantity, unitaryPrice } 
      });

      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { user: true }
      });
      const product = await prisma.product.findUnique({
        where: { id: productId }
      });

      if (order && product) {
  
        const emailToBeSendedTo = order.user.email;
        const subject = 'Item de Compra Adicionado';
        const messageText = `
          Seu item de compra foi adicionado com sucesso!

          Detalhes do Pedido:
          - Pedido ID: ${orderId}
          - Produto: ${product.name}
          - Quantidade: ${quantity}
          - Preço Unitário: ${unitaryPrice}
          - Preço Total: ${quantity * unitaryPrice}

          Obrigado por comprar conosco!

          Equipe Patitas.
        `;

        await sendEmail(emailToBeSendedTo, subject, messageText);
      }

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
