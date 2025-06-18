import transporter from "../config/mailConfig";

type EmailPayload = {
    to:string,
    subject:string,
    html:string,
}


export default async function sendEmail({to,subject,html}:EmailPayload) {
    await transporter.sendMail({
        from:process.env.EMAIL_USER,
        to,
        subject,
        html,
    })
}