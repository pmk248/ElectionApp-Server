import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/app.res.error";
import { voteDTO } from "../../types/DTOs/electionDTO";
import { User } from "../../types/schemas/UserSchema";
import { Candidate } from "../../types/schemas/CandidateSchema";

export const vote = async (req: Request<any, any, voteDTO>, res: Response) => {
    try {
        const id = req.token!.id;
        const user = await User.findById(id);
        const candidate = await Candidate.findOne({ name: req.body.candidate });
        if (!candidate) throw new AppResError(404, "Invalid candidate!");
        if (user!.hasVoted) throw new AppResError(403, "You already voted!")
        user!.hasVoted = true;
        user!.votedFor = candidate.id;
        await user?.save();
        res.status(201).send(`${user!.username}'s vote for ${candidate.name} recorded successfully`)
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}