import { Job } from "bullmq";
import Ijob from "../types/jobType";


export default class EmailJob implements Ijob{
    name:string;
    payload?: {to:string,subject:string,body:string};

    constructor(payload:{to:string,subject:string,body:string}){
        this.payload = payload;
        this.name = this.constructor.name
    }

    handle =  (job: Job) => {
        console.log("Inside Email Job Handler")
    };

    reject =  (job: Job) => {
        console.log("Job Failed")
    };
}