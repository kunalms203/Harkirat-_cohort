const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/todo");
        console.log("Database connected");
    } catch (e) {
        console.error("Error connecting to the database", e);
    }
}
module.exports = connectDb;

