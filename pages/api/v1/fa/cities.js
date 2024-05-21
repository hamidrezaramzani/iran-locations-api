import { cors } from "../../../../middlewares/cors";

const data = require("../../../../public/iran_cities_with_coordinates.json");

const searchByName = (name) => data.find((item) => item.name.includes(name));

const searchById = (id) => {
  return data.find((item) => item.id.toString() === id);
};

export default async function handler(req, res) {
  cors(req, res);
  const { state, stateId } = req.query;
  if (!stateId && !state) {
    const allCities = [];
    data.forEach((state, index) => {
      state.cities.forEach((city) => {
        allCities.push({
          ...city,
          id: allCities.length ? allCities[allCities.length - 1].id + 1 : 1,
        });
      });
    });

    return res.status(200).json(allCities);
  }
  const stateItem = state ? searchByName(state) : searchById(stateId);
  if ((!state && !stateId) || !stateItem) {
    return res.status(400).json({
      message: "Send a valid state name with `state` or `state_id` parameter",
    });
  }

  res.status(200).json(stateItem);
}
