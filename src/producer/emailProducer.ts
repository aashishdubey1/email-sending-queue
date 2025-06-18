import sampleQueue from "../queues/sampleQueue";


export default async function addEmailToQueue(
    name:string,
    payload:{to:string,subject:string,body:string}
){
    await sampleQueue.add(name,payload);

}