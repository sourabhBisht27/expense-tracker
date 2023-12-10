const { Router } = require("express");
const { currentUser, login, register } = require("../controllers/user.controller");
const authenticationMiddleware = require("../middlewares/authentication.middleware");
const userRouter = Router();

userRouter.get("/", authenticationMiddleware, currentUser);
userRouter.post("/login", login);
userRouter.post("/register", register);
module.exports = userRouter;