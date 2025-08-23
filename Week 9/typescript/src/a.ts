const sum = (a: number, b: number): void=> {
  console.log(a+b);
}

sum(5,10);

const a:number =  15;


interface Person {
  name: String,
  age : number,
  greet(phrase:string):void
}

class Employee implements Person{
  name : String;
  age : number;
  constructor(n:String, a:number){
    this.age = a;
    this.name = n;
  }

  greet(phrase:string){
    console.log(`${phrase} ${this.name}`)
  }
}