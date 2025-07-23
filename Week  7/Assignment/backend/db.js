const mongoose = require("mongoose");

const connectdb = () => {
    mongoose.connect("mongodb://localhost:27017/todos2").then(() => {
        console.log("connected to database");
    }
    ).catch((e)=>{
        console.log("error while connecting to the database"+ " "+ e);
    })
}

module.exports = connectdb;