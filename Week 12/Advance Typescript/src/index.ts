interface User{
    name : String,
    age : number
}

function sumOfAges(user1 : User,user2: User):number{
    return user1.age + user2.age;
}


const kunal:User = {
    name : "Kunal",
    age : 21
}


const shubahm:User = {
    name : "shubham",
    age : 22
}

console.log(sumOfAges(kunal,shubahm));