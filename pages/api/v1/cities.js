const data = require("../../../public/iran_cities_with_coordinates.json");
export default function handler(req, res) {
    const { city } = req.query;
    console.log(city);
    const state = data.find(state => state.name === city);
    if (!city || !state)
        return res.status(400).json({
            message: "invalid request - please send  a valid city name with `city` param"
        })

    res.status(200).json(state.cities);
}
