
const data = require("../../../public/iran_cities_with_coordinates.json");
const NextCors = require("nextjs-cors");

export default async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET'],
        origin: "*",
        optionsSuccessStatus: 200
    });

    const { state } = req.query;
    const stateItem = data.find(item => item.name === state);
    if (!state || !stateItem)
        return res.status(400).json({
            message: "invalid request - please send  a valid state name with `state` param"
        })

    res.status(200).json(stateItem.cities);
}
