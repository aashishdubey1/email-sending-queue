import nodemailer from 'nodemailer'

import dotenv from 'dotenv'
import serverConfig from './serverConfig';

dotenv.config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:serverConfig.EMAIL_USER,
        pass:serverConfig.EMAIL_PASS,
    }
})

export default transporter;