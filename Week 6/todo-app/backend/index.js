const express = require('express');
const port = 8080;

const app= express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/kunal',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password);
    res.send(`Username : ${username} and Password : ${password} Received`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
