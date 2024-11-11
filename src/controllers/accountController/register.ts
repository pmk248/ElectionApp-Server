import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/appResError";
import { registerDTO } from "../../types/DTOs/authDTOs";

export const register = async (req: Request<any, any, registerDTO>, res: Response) => {
    try {
        
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}
