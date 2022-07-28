const SneaksAPI = require("sneaks-api");
const sneaks = new SneaksAPI();

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      await sneaks.getMostPopular(10, function (err, products) {
        res.status(200).json(products);
      });
    } catch (error) {
      res.status(503).json(error);
    }
  }
};

export default handler;
