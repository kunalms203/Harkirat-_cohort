// db.ts
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});
const createUsersTable = async () => {
    try {
        await client.connect();
        console.log("Connected to db");
        // Create table directly in your connected database
        const result = await client.query(`
        
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20),
        age INT
      )
    `);
        console.log("Table created:", result.command);
    }
    catch (err) {
        console.error("Error:", err);
    }
    finally {
        await client.end();
    }
};
createUsersTable();
//# sourceMappingURL=index.js.map