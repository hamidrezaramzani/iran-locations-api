const data = require("../../../public/iran_cities_with_coordinates.json");
export default function handler(req, res) {
    const { state } = req.query;
    const stateItem = data.find(item => item.name === state);
    console.log(data);
    if (!state || !stateItem)
        return res.status(400).json({
            message: "invalid request - please send  a valid state name with `state` param"
        })

    res.status(200).json(stateItem.cities);
}
