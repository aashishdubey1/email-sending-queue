import express ,{Express} from 'express';
import serverConfig from './config/serverConfig';
import apiRoutes from './routes';
import SampleQueueProducre from './producer/SampleQueueProducre';
import sampleWorker from './worker/sampleWorker';
import { emailWorker } from './worker/emailWorker';
import addEmailToQueue from './producer/EmailProducer';

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api',apiRoutes)


app.listen(serverConfig.PORT,()=>{
    console.log("Server is Up and running on Port",serverConfig.PORT)


    sampleWorker("SampleQueue")
    emailWorker("EmailQueue")


    SampleQueueProducre("SampleJob",{
        name:"Aashish",
        age:22,
        job:"Backend Developer"
    })

    addEmailToQueue('EmailJob',{
        to:"Aashish",
        subject:"Personal",
        body:"Hey Aashish How are you",
    })

    
})