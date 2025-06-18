
import express from "express";
import sendEmailController from "../../controller/send-email-controller";

const sendEmailRouter = express.Router();

sendEmailRouter.post('/',sendEmailController)

export default sendEmailRouter;
