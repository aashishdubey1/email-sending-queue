import express ,{Express} from 'express';
import serverConfig from './config/serverConfig';
import apiRoutes from './routes';
import  emailWorker  from './worker/emailWorker';
import { setupBullBoard } from "./config/bullBoardConfig";

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


setupBullBoard(app);

app.use('/api',apiRoutes)

app.get('/',(req,res)=>{
    res.redirect('/ui')
})


app.listen(serverConfig.PORT,()=>{
    console.log("Server is Up and running on Port",serverConfig.PORT)
    
    emailWorker("EmailQueue")
})