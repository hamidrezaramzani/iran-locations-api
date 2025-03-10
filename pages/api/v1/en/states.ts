import { NextApiRequest, NextApiResponse } from 'next';
import { getStates, StateQueryParams } from '../../../../lib/state';

const { cors } = require('../../../../middlewares/cors');
const states = require('../../../../public/iran_cities_in_english.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  cors(req, res);
  const { id, state, landlinePrefix, carLicencePlate } =
    req.query as unknown as StateQueryParams;

  try {
    const matchedStates = getStates(states, id, state, landlinePrefix, carLicencePlate);
    return res.status(200).json(matchedStates);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
