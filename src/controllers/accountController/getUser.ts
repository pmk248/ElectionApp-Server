import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/app.res.error";
import { User } from "../../types/schemas/UserSchema";


export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.token!.id).select('-password').populate('votedFor').exec();
        res.json(user);
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}