// db.ts
import { Client } from "pg";
const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_NS7C2UlhJiGu@ep-lingering-heart-a1aqqnm3-pooler.ap-southeast-1.aws.neon.tech/kunal?sslmode=require&channel_binding=require",
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