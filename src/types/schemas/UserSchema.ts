import { Document, model, Schema } from "mongoose";
import { IUser } from "../models/IUser";

interface userDocument extends IUser, Document {}

const userSchema = new Schema<userDocument>({
    username: {
        type     : String,
        required : true
    },
    password: {
        type     : String,
        required : true
    },
    age: {
        type     : Number,
        required : true,
        min      : 0,
        max      : 120
    },
    isAdmin: {
        type     : Boolean,
        default  : false,
    },
    hasVoted: {
        type     : Boolean,
        default  : false
    },
    votedFor: {
        type     : Schema.Types.ObjectId,
        ref      : 'Candidate',
        default  : null 
    }
    
}, { timestamps: true })

export const User = model('User', userSchema)