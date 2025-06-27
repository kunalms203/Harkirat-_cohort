const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    deadline: {
        type: Date,
        required: [true, "Please provide a deadline"]
    },
    iscompleted: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;