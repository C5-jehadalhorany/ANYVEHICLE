const express =require("express");
const cors=require("cors");
require("dotenv").config();
const roleRouter = require("./routes/role");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const maintenRouter= require("./routes/mainten")


const app =express();
app.use(express.json());
app.use(cors());


app.use("/role", roleRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/mainten", maintenRouter);

const PORT =process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`server listening at http://localhost:${PORT}`);
})
