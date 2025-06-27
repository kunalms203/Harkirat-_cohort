const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors(
    {
        origin: '*',
        credentials: true,
        methods: 'GET, POST'
    }
));
app.listen(port);
app.get("/calculate",(req, res)=>{ 
    const {PRINCIPAL,RATE,TIME} = req.query;
    const sum = (parseInt(PRINCIPAL) * parseInt(RATE) * parseInt(TIME) )/100;
    res.json({
        sum: sum,
    });
});