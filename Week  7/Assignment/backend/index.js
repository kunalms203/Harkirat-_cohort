const express = require("express");
const connectdb = require("./db");
const app = express();
const { Todo } = require("./module")

app.use(express.json());

connectdb();

app.get("/", async (req, res) => {
    const todos = await Todo.find({});
    console.log(todos);
    res.send(todos);
})

app.post("/", async (req, res) => {
    const todo = req.body;
    const newtodo = await Todo.create(todo);
    console.log(newtodo);
    res.send("new todo added: " + newtodo)
})

app.put("/:id", async (req, res) => {
    try{
    const {id} = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    console.log("updated todo" + updatedTodo);
    res.send(updatedTodo);
    }catch(e){
        console.log(e);
    }
})

app.listen("3000", () => {
    console.log("app is running on 3000 port");
})