import { connectDB, client } from "./db.js";
import express from "express";
import todoRouter from "./routes/todoRoutes.js";
const app = express();
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        todoName VARCHAR(255) NOT NULL,
        done BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const bootStrap = async () => {
    try {
        await connectDB();
        client.query(createTableQuery);
        console.log("Created the table");
    }
    catch(err) {
        console.log(`Error while creating the table or connecting to the DB ${err}`);
    }
}

await bootStrap();

app.use("/api/v1/todo", todoRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});