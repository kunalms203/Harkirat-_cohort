interface User {
  name: string;
  id: number;
}

interface Users {
  [key: string]: {
    name:string,
    id:number
  };
}

// can also be done like this
// type Users = {
//     [key:string]:{
//         name :string,
//         id : number
//     }
// }

const users:Users = {
  kunal: {
    name: "Kunal",
    id: 1,
  },
  shubham: {
    name: "Shubham",
    id: 2,
  },
};
