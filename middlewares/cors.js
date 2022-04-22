import NextCors from "nextjs-cors";

export async function cors(req , res) {
    await NextCors(req, res, {
        methods: ['GET'],
        origin: "*",
        optionsSuccessStatus: 200
    });
}
