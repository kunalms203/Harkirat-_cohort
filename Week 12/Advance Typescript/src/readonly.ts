interface User{
    name : String,
    age : number
}

const user:Readonly<User> = {
    name : "Kuanl",
    age:21
}

//cannot cahnge the name value cause its readonly now
// user.name = "Harkirat"; 

console.log(user.name);

const arr:number[] = [1,2,3];
