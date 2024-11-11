import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes";
import accountRouter from "./routes/accountRoutes";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter)
app.use("/account", accountRouter)

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
})