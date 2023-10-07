// Express
const express = require("express");
const app = express();
const userRouter = require("./routers/user");

app.use(express.json());

app.use("/user", userRouter);

app.listen(3000, () => console.log("server running"));
