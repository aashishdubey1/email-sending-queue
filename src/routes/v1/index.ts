import express from 'express'
import { pingCheck } from '../../controller'

const v1Routes = express.Router()


v1Routes.get("/ping",pingCheck)

export default v1Routes