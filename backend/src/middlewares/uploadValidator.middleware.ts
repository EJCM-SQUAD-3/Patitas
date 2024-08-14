import { Request, Response, NextFunction } from 'express';

export const validatePhotoUpload = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (!allowedMimeTypes.includes(req.file.mimetype)) {
    return res.status(400).json({ message: 'Invalid file type. Only JPEG, PNG and JPG are allowed.' });
  }

  // Você pode adicionar mais validações aqui, como tamanho máximo do arquivo

  next();
};
