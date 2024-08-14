import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();

class AddressController {

  public async create(req: Request, res: Response) {
    const { number, apartament, cep } = req.body;
    const idUser = req.user; 

    try {
      const newAddress = await prisma.address.create({
        data: { number, apartament, cep, user: {connect:{id:idUser}} }
      });
      return res.status(201).json(newAddress);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro criando endereço", error});
    }
  }

  public async read(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const address = await prisma.address.findUnique({ where: { id: Number(id) } });
      return res.status(200).json(address);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro lendo endereço", error});
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const idUser = req.user;
    const { number, apartament, cep } = req.body;

    try {
      const updatedAddress = await prisma.address.update({
        where: { id: Number(id), userId: idUser },
        data: { number, apartament, cep }
      });
      return res.status(200).json(updatedAddress);
    } catch (error) {
      return res.status(500).json({ messageError: "Erro atualizando endereço", error});
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const idUser = req.user;

    try {
      await prisma.address.delete({ where: { id: Number(id), userId: idUser } });
      return res.status(200).json({ message: "Endereço deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ messageError: "Erro deletando endereço", error});
    }
  }
}

export const addressController = new AddressController();

