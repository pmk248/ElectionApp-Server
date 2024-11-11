import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { AppResError } from "../../types/extensions/app.res.error";
import { registerDTO } from "../../types/DTOs/authDTOs";
import { IUser } from "../../types/models/IUser";
import { User } from "../../types/schemas/UserSchema";

export const register = async (req: Request<any, any, registerDTO>, res: Response) => {
    try {
        const user = new User({
            ...req.body,
            password: await bcrypt.hash(req.body.password, 5)
        }); 
        await user.save();
        res.status(201).send(`${user.username} registered successfully`);
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}
