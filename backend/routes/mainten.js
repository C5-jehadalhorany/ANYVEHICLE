const express = require("express");

const { mainten ,getmaintenforadmin } = require("../controllers/maintenance");
const { authentication } = require("../middlewares/authentication")

const maintenRouter = express.Router();

maintenRouter.post("/create", authentication, mainten);
maintenRouter.get("/", authentication, getmaintenforadmin);

module.exports = maintenRouter;
