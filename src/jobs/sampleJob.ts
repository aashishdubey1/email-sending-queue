import { Job } from "bullmq";
import Ijob from "../types/jobType";


export default class SampleJob implements Ijob{
    name:string;
    payload?: Record<string, unknown> | undefined;

    constructor(payload:Record<string,unknown>){
        this.name = this.constructor.name;
        this.payload = payload
    }


    handle = (job: Job) => {
        console.log("Inside job Handler")
        if(job){
            console.log(job.id,job.data,job.name,)
        }
    };

    reject = (job: Job) => {
        console.log("job Rejected")
        if(job){
          console.log(job.id)
        }
    };


}