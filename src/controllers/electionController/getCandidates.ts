import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/app.res.error";
import { Candidate } from "../../types/schemas/CandidateSchema";


export const getAllCandidates = async (req: Request, res: Response) => {
    try {
        const candidates = await Candidate.find({}).select('-_id -__v').exec();
        res.json(candidates);
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}