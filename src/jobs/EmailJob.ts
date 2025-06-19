import { Job } from "bullmq";
import Ijob from "../types/jobType";
import sendEmail from "../mail/sendEmail";


export default class EmailJob implements Ijob{
    name:string;
    payload?: {to:string,subject:string,body:string};

    constructor(payload:{to:string,subject:string,body:string}){
        this.payload = payload;
        this.name = this.constructor.name
    }

    handle =  async (job: Job) => {
        console.log("Sending email to ,",job.data.to)
        await sendEmail({
            to:job.data.to,
            subject:job.data.subject,
            html:`<p>${job.data.body}</p>`  
        })
    };

    reject =  (job: Job) => {
       console.error("Failed to send email:", job.id);
    };
}