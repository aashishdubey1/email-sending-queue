import express ,{Express} from 'express';
import serverConfig from './config/serverConfig';
import apiRoutes from './routes';
import  emailWorker  from './worker/emailWorker';

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api',apiRoutes)


app.listen(serverConfig.PORT,()=>{
    console.log("Server is Up and running on Port",serverConfig.PORT)
    
    emailWorker("EmailQueue")
})