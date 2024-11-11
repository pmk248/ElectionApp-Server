import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import accountRouter from "./routes/accountRoutes";
import electionRouter from "./routes/electionRoutes";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/account", accountRouter)
app.use("/election", electionRouter)

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
})