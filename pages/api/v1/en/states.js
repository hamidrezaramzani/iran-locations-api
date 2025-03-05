import { getStates } from '../../../../lib/state';

const { cors } = require('../../../../middlewares/cors');
const states = require('../../../../public/iran_cities_in_english.json');

export default async function handler(req, res) {
  cors(req, res);
  const { id, state, landlinePrefix } = req.query;

  try {
    const matchedStates = getStates(states, id, state, landlinePrefix);
    return res.status(200).json(matchedStates);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
