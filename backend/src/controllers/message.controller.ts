import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class MessageController {
  
  public async create(request: Request, response: Response) {
    try {
      const { content, senderId, receiverId } = request.body;
      const idUser = request.user;

      const sender = await prisma.user.findUnique({ where: { id: idUser } });
      const receiver = await prisma.user.findUnique({ where: { id: receiverId } });

      if (!sender || !receiver) {
        return response.status(400).json({
          messageError: "Sender ou Receiver não encontrado.",
        });
      }
     
      const newMessage = await prisma.message.create({
        data: {
          content,
          sender: { connect: { id: idUser } },
          receiver: { connect: { id: receiverId } }, 
        },
      });

      return response.status(201).json({
        message: "Mensagem criada com sucesso",
        data: newMessage,
      });
    } catch (error) {
      return response.status(500).json({
        messageError: "Erro interno no servidor",
        error: error, 
      });
    }
  }

  public async read(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const message = await prisma.message.findUnique({
        where: { id: Number(id) },
        include: {
          sender: true,
          receiver: true,
        },
      });

      if (message) {
        return response.status(200).json({
          message: "Mensagem localizada",
          data: message,
        });
      } else {
        return response.status(404).json({
          message: 'Mensagem não encontrada',
        });
      }
    } catch (error) {
      return response.status(400).json({
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const idUser = request.user;

      await prisma.message.delete({
        where: { id: Number(id), senderId: idUser },
      });

      return response.status(204).json({
        message: "mensagem apagada!"
      });
    } catch (error) {
      return response.status(400).json({
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }
}

export const messageController = new MessageController();
