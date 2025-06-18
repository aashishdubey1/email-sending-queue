import emailQueue from "../queues/emailQueue";


export default async function addEmailToQueue(
    name:string,
    payload:{to:string,subject:string,body:string}
){
    await emailQueue.add(name,payload);
    console.log("job Added")

}