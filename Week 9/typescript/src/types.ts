const greet = (id:number|String):void =>{
    console.log(id);
}

greet(1);
greet("1");

type NumString = number|String;

const greet2 = (id:NumString):void =>{
    console.log(id);
}


greet2(1);
greet2("1");

interface Employee{
    name : String,
    start_date : Date
}

type Manager = {
    name : String,
    department : String
}

type user = Manager & Employee;

let k:user = {
    name : "Kunal",
    department:"kkk",
    start_date: new Date()
}

console.log(k);