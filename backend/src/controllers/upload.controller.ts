import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

interface MulterRequest extends Request {
  file: Express.Multer.File;
}

const prisma = new PrismaClient();

export const uploadPhoto = async (req: MulterRequest, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Aqui você pode associar o arquivo a uma entidade no banco de dados, se necessário
    // Por exemplo, atualizar a URL da imagem de um produto:
    // const productId = req.body.productId;
    // await prisma.product.update({
    //   where: { id: productId },
    //   data: { imageUrl: `/uploads/photos/${file.filename}` },
    // });

    return res.status(200).json({
      message: 'File uploaded successfully',
      filename: file.filename
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error uploading file' });
  }
};
