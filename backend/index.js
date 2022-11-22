const express =require("express");
const cors=require("cors");
require("dotenv").config();
const roleRouter = require("./routes/role");
const registerRouter = require("./routes/register");
const app =express();
app.use(express.json());
app.use(cors());


app.use("/role", roleRouter);
app.use("/register", registerRouter);


const PORT =process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`server listening at http://localhost:${PORT}`);
})
