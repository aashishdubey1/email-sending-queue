import { Request,Response } from "express"

export async function pingCheck(req:Request,res:Response) {
    console.log("req comes here")
    res.json({"msg":"OK"})
}

