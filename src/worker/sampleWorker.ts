import { Job, Worker } from "bullmq";
import SampleJob from "../jobs/sampleJob";
import redisConnection from "../config/redisConfig";

export default function sampleWorker(name:string){
    new Worker(
        name,
        async (job:Job)=>{
            if(job.name === "SampleJob"){
                const sampleJob = new SampleJob(job.data)
                console.log(sampleJob)
                sampleJob.handle(job)
                return true;
            }           
        },
        {connection:redisConnection}
    )
}