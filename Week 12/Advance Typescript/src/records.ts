export type  User =  {
  name: string;
  id: number;
}

interface Users {
  [key: string]: User
}

// can also be done like this
// type Users = {
//     [key:string]:{
//         name :string,
//         id : number
//     }
// }

type RecordUser = Record<string,User>;

const users:RecordUser = {
  "kunal": {
    name: "Kunal",
    id: 1,
  },
  "shubham": {
    name: "Shubham",
    id: 2,
  },
};

console.log(users.kunal);


