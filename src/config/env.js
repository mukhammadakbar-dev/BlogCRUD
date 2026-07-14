import { config } from "dotenv";
config();

export const env = {
    PORT: Number(process.env.PORT_API),
    MONGO_URI: String(process.env.MONGO_URI)
};