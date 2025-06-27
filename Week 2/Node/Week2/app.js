const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const user = [{
    Name: 'Kunal',
    Kidneys:[{
        isHealthy: false,
    }]
}]

app.listen(PORT,()=>{
    console.log(`Port is running at ${PORT}`);
});

app.get('/kid',(req, res)=>{
    const id = parseInt(req.query.id);
    console.log(id);
    const kidneys = user[id].Kidneys;
    let noofhealthykidneays = 0;
    for(let i = 0; i < kidneys.length; i++) {
        if(kidneys[i].isHealthy) {
            noofhealthykidneays += 1; 
        }
    }
    res.send(`User ${user[id].name} have ${noofhealthykidneays} healthy. and his totl kidneys are ${kidneys.length+1}`)
})

app.post('/kid', (req, res) => {
    const newKidney = req.body.isHealthy;
    console.log(newKidney);
    user[0].Kidneys.push({ isHealthy: newKidney});
    res.status(201).json(user[0].Kidneys);
    res.send("Kidney added successfully");
});