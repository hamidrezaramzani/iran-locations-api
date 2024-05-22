import { getStates } from "../../../../lib/state";

const states = require("../../../../public/iran_cities_in_english.json");
const { cors } = require("../../../../middlewares/cors");

export default async function handler(req, res) {
  cors(req, res);
  const { id, state } = req.query;

  try {
    const matchedStates = getStates(states, id, state);
    return res.status(200).json(matchedStates);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
