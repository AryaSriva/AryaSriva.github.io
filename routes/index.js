import pageRoutes from "./pageRoutes.js";

const constructorMethod = (app) => {
  app.use("/", pageRoutes);
  app.use("*", (req, res) => {
    res.status(404).send({ error: "Not Found" });
  });
};
export default constructorMethod;
