//const SneaksAPI = require("sneaks-api");
import SneaksAPI from "sneaks-api";
const sneaks = new SneaksAPI();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { make } = req.query;

    try {
      await sneaks.getSeries(make, req.body.quantity, function (err, products) {
        res.status(200).json(products);
      });
    } catch (error) {
      res.status(503).json(error);
    }
  }
};

export default handler;
