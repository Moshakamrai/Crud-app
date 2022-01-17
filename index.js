const express = require ("express");
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes")

const app = express();

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(()=> console.log("succesfully connected to DB"))
.catch((e)=> console.log(e));

app.use(express.json());

app.get("/", (req , res) => {
  res.send("<h2> FARIAA HI THERE</h2>")
});


app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listenting on port ${port}`));