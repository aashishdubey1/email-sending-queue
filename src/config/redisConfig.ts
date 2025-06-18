import dotenv from 'dotenv'
import Redis from "ioredis";
import serverConfig from './serverConfig';

dotenv.config();

const redisConfig = {
    port:serverConfig.REDIS_PORT,
    host:serverConfig.REDIS_URL,
    maxRetriesPerRequest:null
}

const redisConnection = new Redis(redisConfig)

export default redisConnection