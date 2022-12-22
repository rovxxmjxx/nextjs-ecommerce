import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getProducts() {
  try {
    const response = await prisma.products.findMany();
    return response;
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  message: string;
  data?: any;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await getProducts();

  return res.status(200).json({ message: 'ok', data });
}
