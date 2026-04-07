import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config(); // loading the env file

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to the DB");
    }
    catch(err) {
        console.log(`Error connecting to the DB: \n ${err}`);
        process.exit(1);
    }
}

export {client, connectDB};