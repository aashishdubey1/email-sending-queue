import { Request,Response } from "express"

export async function pingCheck(req:Request,res:Response) {
    res.json({"msg":"OK"})
}

