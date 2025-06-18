import express ,{Express} from 'express';
import serverConfig from './config/serverConfig';
import apiRoutes from './routes';
import SampleQueueProducre from './producer/SampleQueueProducre';
import sampleWorker from './worker/sampleWorker';

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api',apiRoutes)


app.listen(serverConfig.PORT,()=>{
    console.log("Server is Up and running on Port",serverConfig.PORT)


    sampleWorker("SampleQueue")


    SampleQueueProducre("SampleJob",{
        name:"Aashish",
        age:22,
        job:"Backend Developer"
    })

    
})