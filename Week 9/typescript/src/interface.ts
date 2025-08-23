interface User {
  name: String;
  age: number;
}

type User2 =  {
  name: String;
  age: number;
}

const isLegal = ({age}: User2): void => {
  if (age > 18) {
    console.log("you can drink");
  }else{
    console.log("You cannot drink");
  }
};

isLegal({
    name:"Kunal Shinde",
    age:15
})