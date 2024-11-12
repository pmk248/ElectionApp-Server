import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import accountRouter from "./routes/accountRoutes";
import electionRouter from "./routes/electionRoutes";
import { dbConnection } from "./Database/connection";

const PORT = process.env.PORT;
const app = express();

dbConnection();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/account", accountRouter);
app.use("/elections", electionRouter);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
})