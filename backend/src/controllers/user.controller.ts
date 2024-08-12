import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import auth from "../config/auth";

const prisma = new PrismaClient();



class UserController {
  
  public async create(request: Request, response: Response) {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        const { name, email, password,cpf } = request.body;
        const { hash, salt } = auth.generatePassword(password);

        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            hash,
            salt,
            cpf,
          },
        });
        const userId = newUser.id;
        const newSeller = await prisma.seller.create({
          data:{
            userId
          }
        });
        return response.status(201).json({ 
          message: "Usuário comprador e vendedor criado com sucesso",
          user: newUser,
          seller: newSeller,
          token: auth.generateJWT(newUser),
        });
      });
    } catch (error) {
      return response.status(500).json({
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async login(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email: email }
      });

      if (!user) {
        return response.status(400).json({ message: "Usuário não encontrado!" });
      }

      const isPasswordValid = auth.checkPassword(password, user.hash, user.salt);
      if (!isPasswordValid) {
        return response.status(400).json({ message: "Senha incorreta!" });
      }

      const token = auth.generateJWT(user);

      return response.status(200).json({ message: "Autenticação bem-sucedida", token: token });

    } catch (error) {
      return response.status(500).json({
        messageError: "Erro interno no servidor",
        error,
      });
    }
  }
  public async getUserById(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: {
          addresses: true,
          seller: {
            include: {
              products: true
          }},
          order: true,
          cart: true,
          favorites: true,
          sentMessages: true,
          receivedMessages: true,
        },
      });

      if (user) {
        return response.status(200).json({
          user,
          message: "Usuário localizado",
        });
      } else {
        return response.status(404).json({ 
          message: 'Usuário não encontrado',
        });
      }
    } catch (error) {
      return response.status(400).json({
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async getAllUsers(request: Request, response: Response) {
    try {
      const users = await prisma.user.findMany({
        include: {
          addresses: true,
          seller: true,
          order: true,
          cart: true,
          favorites: true,
          sentMessages: true,
          receivedMessages: true,
        },
      });
      return response.status(200).json({
        users,
        message: "Usuários localizados",
      });
    } catch (error) {
      return response.status(400).json({ 
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async update(req: Request, res: Response) {
    const id = req.user;
    const { name, cpf, email } = req.body;
    console.log(id);

    try {
      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, cpf, email },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ messageError: "Error atualizando", error });
    }
  }

  public async updatePassword(req: Request, res: Response){
    const id = req.user;
    const {password} = req.body;
    const { hash, salt } = auth.generatePassword(password);

    try{
      const user = await prisma.user.update({
        where: {id: Number(id)},
        data: {
          hash,
          salt,
        },
      });
      return res.status(200).json(user);
    }
    catch(error){
      return res.status(500).json({messageError: "Erro atualizando a senha", error})
    }
  }

  public async delete(request: Request, response: Response){
    const id = request.user;
    try{
      const user = await prisma.user.delete({
        where: {id: Number(id)}
      });
      return response.status(200).json(user);
    }
    catch(error){
      return response.status(500).json({error: error});
    }
  }  

  public async getUserMessages(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: {
          sentMessages: true,
          receivedMessages: true,
        },
      });

      if (user) {
        return response.status(200).json({
          sentMessages: user.sentMessages,
          receivedMessages: user.receivedMessages,
        });
      } else {
        return response.status(404).json({ 
          message: 'Usuário não encontrado',
        });
      }
    } catch (error) {
      return response.status(400).json({ 
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async getUserOrders(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { order: true },
      });

      if (user) {
        return response.status(200).json(user.order);
      } else {
        return response.status(404).json({ 
          message: 'Usuário não encontrado',
        });
      }
    } catch (error) {
      return response.status(400).json({
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async getUserCart(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { cart: true },
      });

      if (user) {
        return response.status(200).json(user.cart);
      } else {
        return response.status(404).json({ 
          message: 'Usuário não encontrado',
        });
      }
    } catch (error) {
      return response.status(400).json({ 
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }

  public async getUserFavorites(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { favorites: true },
      });

      if (user) {
        return response.status(200).json(user.favorites);
      } else {
        return response.status(404).json({ 
          message: 'Usuário não encontrado',
        });
      }
    } catch (error) {
      return response.status(400).json({ 
        messageError: "Erro interno no servidor",
        error: error,
      });
    }
  }
}

export const userController = new UserController();
