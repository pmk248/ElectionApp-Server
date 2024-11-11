export class AppResError extends Error {
    statusCode?: number

    constructor(status: number, message: string) {
        super(message);
        this.statusCode = status;
    }
}