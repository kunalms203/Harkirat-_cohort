const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})

app.get('/user-kidney', function(req, res){
    const userid = req.headers.username;
    const password = req.headers.password;
    const userKidneys = req.query.kidney;

    if(userid != "kunal" && password != "kunal"){
        res.send("Invalid username or password")
    }
    console.log(userid, password, userKidneys);
    if(userKidneys == 1 || userKidneys == 2){
        res.send(`Congratulation you have ${userKidneys} kidneys `)
    }
    else{
        res.send("You should be worried about your health")
    }
});