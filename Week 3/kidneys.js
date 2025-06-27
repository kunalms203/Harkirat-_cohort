const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})

app.use(express.json());

app.use((req, res, next) =>{
    const kidneys = req.body.kid;
    if(!kidneys ||!Array.isArray(kidneys)){
        return res.status(400).send({error: 'kidneys field is required and must be an array'});
    }
    const noOfKid= kidneys.length;
    console.log (noOfKid);
    if(noOfKid > 2 || noOfKid<= 1){
        return res.status(400).send({error: 'there is s omething wrong with you buddy'});
    }
    
    next();
})

app.get('/kidneys', (req, res)=>{
    const kidneys = req.body.kid;
    const noOfKid= kidneys.length;
    
    res.send(`Consgrats ypou are in a good health`);
})

app.use((err, req, res, next)=>{
    res.status(500).send({error: 'Something went wrong'});
})