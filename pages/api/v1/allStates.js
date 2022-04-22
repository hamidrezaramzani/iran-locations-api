const data = require("../../../public/iran_cities_with_coordinates.json");
const _ = require("lodash");
export default function handler(req, res) {
    const allStates = data.map(state => _.omit(state, "cities"));
    res.status(200).json(allStates)
}
