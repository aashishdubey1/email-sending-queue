import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT:process.env.PORT || 4000,
    REDIS_PORT:parseInt(process.env.REDIS_PORT||"6379"),
    REDIS_URL:process.env.REDIS_URL,
    EMAIL_USER:process.env.EMAIL_USER,
    EMAIL_PASS:process.env.EMAIL_PASS,
    
}
