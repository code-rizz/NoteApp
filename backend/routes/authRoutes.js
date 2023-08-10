const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");

const authRouter = express.Router();

authRouter.post("/api/signup", Signup);
authRouter.post("/api/login", Login);

module.exports = authRouter;