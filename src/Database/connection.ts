import { connect } from "mongoose"
import { Candidate } from "../types/schemas/CandidateSchema";
import { seedCandidates } from "./seed";

export const dbConnection = async () => {
    try {
        await connect(process.env.CONNECTION_STR!);
        if(!await Candidate.countDocuments()) {
            await seedCandidates();
            console.log("Seeded successfully!");
        }
        console.log("successfully connected to mongoDB");
    } catch(err) {
        console.error((err as Error).message);
    }
}