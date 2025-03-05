import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

export async function cors(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });
}
