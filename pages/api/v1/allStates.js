const data = require("../../../public/iran_cities_with_coordinates.json");
const _ = require("lodash");
import NextCors from "nextjs-cors";


export default async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET'],
        origin: "*",
        optionsSuccessStatus: 200
    });
    const allStates = data.map(state => _.omit(state, "cities"));
    res.status(200).json(allStates)
}
