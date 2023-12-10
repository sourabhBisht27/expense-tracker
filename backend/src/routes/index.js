const { Router } = require("express");
const userRouter = require("./user.router");
const routes = Router();

routes.get("/api/v1/health", (_, res) => {
    return res.status(200).json({ status: true, message: "Server is healthy" })
})
routes.use("/api/v1/auth", userRouter);
module.exports = routes;