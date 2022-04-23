
const data = require("../../../public/iran_cities_with_coordinates.json");
const { cors } = require("../../../middlewares/cors");
const _ = require("lodash");
export default async function handler(req, res) {

    cors(req, res);
    const { id } = req.query;
    if (id) {
        if (isNaN(id)) {
            return res.status(400).json({
                message: "Send a valid id number with `id` parameter"
            });
        }
        const state = data.find(item => item.id == id);
        if (!state)
            return res.status(404).json({
                message: "No state found"
            });

        return res.status(200).json(_.omit(state,"cities"));
    }

    const allStates = data.map(state => _.omit(state, "cities"));
    return res.status(200).json(allStates);
}
