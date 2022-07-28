//const SneaksAPI = require("sneaks-api");
import SneaksAPI from "sneaks-api";
const sneaks = new SneaksAPI();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { brand } = req.query;

    try {
      await sneaks.getProducts(
        brand,
        req.body.quantity,
        function (err, products) {
          res.status(200).json(products);
        }
      );
    } catch (error) {
      res.status(503).json(error);
    }
  }
};

export default handler;
