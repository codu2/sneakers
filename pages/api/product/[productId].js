//const SneaksAPI = require("sneaks-api");
import SneaksAPI from "sneaks-api";
const sneaks = new SneaksAPI();

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { styleId } = req.query;

    try {
      await sneaks.getProductPrices(styleId, function (err, product) {
        res.status(200).json(product);
      });
    } catch (error) {
      res.status(503).json(error);
    }
  }
};

export default handler;
