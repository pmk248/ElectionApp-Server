import { Request, Response } from "express";
import { AppResError } from "../../types/extensions/appResError";

export const login = async (req: Request, res: Response) => {
    try {
        
    } catch(err) {
        const error = err as AppResError;
        res.status(error.statusCode || 500).send(error.message);
        console.error(error);
    }
}