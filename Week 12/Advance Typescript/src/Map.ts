import type{User} from "./records"

const user = new Map<string,User>();
user.set("kunal",{name:"kunal",id:1})

const ant = user.get("kunal");

console.log(ant);