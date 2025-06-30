import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { product } from '../entity/product';
// import { File as MulterFile } from 'multer';

declare global {
  namespace Express {
    interface Request {
      files?: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] };
    }
  }
}

const productRepo = AppDataSource.getRepository(product);

export const getProducts = async (req: Request, res: Response) => {
  const products = await productRepo.find();
  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {
  const product = await productRepo.findOneBy({ id: +req.params.id });
  res.json(product);
};

export const addProduct = async (req: Request, res: Response) => {
  const { sku, name, price } = req.body;
  const images = req.files ? (req.files as Express.Multer.File[]).map(file => file.filename) : [];

  const product = productRepo.create({ sku, name, price, images });
  const result = await productRepo.save(product);
  res.status(201).json(result);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { sku, name, price } = req.body;
  const images = req.files ? (req.files as Express.Multer.File[]).map(file => file.filename) : [];

  const product = await productRepo.findOneBy({ id: +req.params.id });
  if (!product) return res.status(404).json({ message: 'Not found' });

  product.sku = sku;
  product.name = name;
  product.price = +price;
  if (images.length) product.images = images;

  const result = await productRepo.save(product);
  res.json(result);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const result = await productRepo.delete(+req.params.id);
  res.json(result);
};
