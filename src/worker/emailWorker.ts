import { Job ,Worker} from "bullmq";
import EmailJob from "../jobs/EmailJob";
import redisConnection from "../config/redisConfig";


export default function emailWorker(name:string){
    new Worker("EmailQueue", async (job: Job) => {
        console.log("Worker picked job:", job.name); 
        if (job.name === "EmailJob") {
            const jobInstance = new EmailJob(job.data);
            console.log("Job instance created");
            await jobInstance.handle(job);
  }
}, { connection: redisConnection });

}