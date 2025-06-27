const express = require('express');
const app = express();
const connectDb = require('./db');
const todoSchema = require('./validation');
const Todo = require('./models');
const cors = require("cors");

app.use(express.json());
app.use(cors());
connectDb();

app.get("/", async (req, res) => {
    try {
        const todo = await Todo.find({});
        res.json(todo);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

app.post('/', async (req, res) => {
    const validation = todoSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).send(validation);
        return;
    }
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({ title, description, deadline: Date.now() });
        await newTodo.save()
        res.json(newTodo);
    } catch (err) {
        res.status(500).send(`message : ${err.message}`);
    };
});

app.put("/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const updatedTodo = await Todo.findOneAndUpdate({_id:id},{isCompleted:true});
        await updatedTodo.save();
        res.json(updatedTodo);
    }
    catch(err){
        console.error(err);
        res.status(500).send(`message : ${err.message}`);
    }
})

app.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try{
        await Todo.findByIdAndDelete(id);
        res.json({message: "Deleted successfully"});
    }catch(err){
        res.status(500).send(`message : ${err.message}`);
    }
});


app.listen("3000", () => {
    console.log("Server is running on port 3000");
})