import { Response,Request } from "express";
import sendEmail from "../mail/sendEmail";

export default async function sendEmailController(req:Request,res:Response,next:()=>void){
    const body :any = req.body
    await sendEmail({to:body.to,subject:body.subject,html:body.body})
    res.status(200).json({msg:"queued"})
}