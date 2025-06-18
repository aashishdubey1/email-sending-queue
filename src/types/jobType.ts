import { Job } from "bullmq";


export default interface Ijob {
    name:string;
    payload?: Record<string, unknown>;

    handle:(job:Job)=>void 
    reject:(job:Job)=>void
}