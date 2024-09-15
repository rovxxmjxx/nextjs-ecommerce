import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function getProducts(skip: number, take: number) {
//   try {
//     const response = await prisma.products.findMany({ skip, take });
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }
async function getProducts() {
  try {
    const totalProducts = await prisma.products.findMany();

    return totalProducts;
  } catch (error) {
    console.error(error);
  }
}

type Pagination = {
  currentPage: number;
  totalPages: number;
};

type Data = {
  message: string;
  data?: any;
  pagination?: Pagination;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { page, per } = req.query;

  const perNumber = Number(per);
  const pageNumber = Number(page);

  try {
    // const data = await getProducts(skip, take);
    const totalProducts = await getProducts();
    const displayPosts = totalProducts.slice(perNumber * (pageNumber - 1), perNumber * pageNumber);

    const pagination = {
      currentPage: pageNumber,
      totalPages: Math.ceil(totalProducts.length / perNumber),
      per,
    };

    return res.status(200).json({ message: 'ok', data: displayPosts, pagination });
  } catch (error) {
    return res.status(500).json({ message: 'failed' });
  }
}
