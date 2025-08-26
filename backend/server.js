import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const PORT = 4000;
connectToDB();

//middlewares
app.use(express.json());
app.use(cors());

//api-endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(PORT, () => {
  console.log(`Sever started at http://localhost:${PORT}`);
});
