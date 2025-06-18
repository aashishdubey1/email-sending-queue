import express from 'express'
import { pingCheck } from '../../controller'
import sendEmailRouter from './sendEmail-routes'

const v1Routes = express.Router()

v1Routes.use('/send-email',sendEmailRouter)

v1Routes.get("/ping",pingCheck)


export default v1Routes