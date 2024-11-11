import { Document, model, Schema } from "mongoose";
import { ICandidate } from "../models/ICandidate";

interface candidateDocument extends ICandidate, Document {}

const candidateSchema = new Schema<candidateDocument>({
    name: {
        type     : String,
        required : true
    },
    image: {
        type     : String,
        required : true
    },
    votes: {
        type     : Number,
        default  : 0,
        min      : 0
    },
    color: {
        type     : String,
        enum     : ['red', 'blue', 'yellow'],
        required : true
    }
}, { timestamps: true })

export const Candidate = model('Candidate', candidateSchema)