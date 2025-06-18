import { Job ,Worker} from "bullmq";
import EmailJob from "../jobs/EmailJob";
import redisConnection from "../config/redisConfig";


export function emailWorker(name:string){
    new Worker(
        name,
        async (job:Job)=>{
            const emailJobInstance = new EmailJob(job.data)
            emailJobInstance.handle(job)
        },
        {connection:redisConnection}
    )
}