const data = require("../../../public/iran_cities_with_coordinates.json");
export default function handler(req, res) {
    const allStates = data.map(state => ({ name: state.name }));
    res.status(200).json(allStates)
}
