import { cors } from "../../../middlewares/cors";
import axios from "axios";

export default async function handler(req, res) {
  cors(req, res);
  try {
    const { data: donates } = await axios.get(
      "https://daramet.com/api/LastDonates",
      {
        headers: {
          Authorization: process.env.DARAMET_API_TOKEN,
        },
      }
    );

    return res.status(200).json(donates);
  } catch (error) {
    return res.status(400).json({
      message: "We have an error on server",
    });
  }
}
