import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getProduct(id: number) {
  try {
    const response = await prisma.products.findUnique({ where: { id } });
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function updateProduct(id: number, data: any) {
  try {
    const response = await prisma.products.update({ where: { id }, data });

    console.log('**************', id, data, response);

    return response;
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  message: string;
  data?: any;
};

const getHandler = async (id: number) => {
  try {
    const data = await getProduct(id);
    return { status: 200, message: 'ok', data };
  } catch (error) {
    return { status: 500, message: 'failed' };
  }
};

const updateHandler = async (id: number, body: any) => {
  try {
    const data = await updateProduct(id, body);
    return { status: 200, message: 'ok', data };
  } catch (error) {
    return { status: 500, message: 'failed' };
  }
};

const HANDLER = {
  GET: getHandler,
  DELETE: 'deleteHandler',
};

const BODY_HANDLER = {
  POST: 'postHandler',
  PATCH: updateHandler,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const {
    query: { id },
    body,
  } = req;

  if (!id) {
    res.status(400).json({ message: 'no id' });
  }

  const { status, message, data } = body
    ? await BODY_HANDLER[req.method](+id, JSON.parse(body))
    : await HANDLER[req.method](+id);

  return res.status(status).json({ message, data });
}
