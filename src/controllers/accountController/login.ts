import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/app.res.error";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { loginDTO } from "../../types/DTOs/authDTOs";
import { User } from "../../types/schemas/UserSchema";

export const login = async (req: Request<any, any, loginDTO>, res: Response) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            throw new AppResError(404, `${req.body.username} not found!`)
        }
        if (!await bcrypt.compare(req.body.password, user.password)) {
            throw new AppResError(404, `${req.body.username} doesn't exist or the password is incorrect!`)
        } 
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
            expiresIn: "4h"
        });
        res.setHeader("Authorization", token);
        res.status(200).json({ token });
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}