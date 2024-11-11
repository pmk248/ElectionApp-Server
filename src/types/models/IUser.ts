import { Types } from "mongoose"

export interface IUser {
    username: string,
    password: string,
    age: number,
    isAdmin: boolean,
    hasVoted: boolean,
    votedFor: Types.ObjectId | null
}