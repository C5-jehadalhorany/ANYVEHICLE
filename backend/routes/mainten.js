const express = require("express");

const { mainten ,getmaintenforadmin,adminReqBackToUser } = require("../controllers/maintenance");
const { authentication } = require("../middlewares/authentication")

const maintenRouter = express.Router();

maintenRouter.post("/create", authentication, mainten);
maintenRouter.get("/", authentication, getmaintenforadmin);
maintenRouter.put("/:maint_id", authentication, adminReqBackToUser);

module.exports = maintenRouter;
