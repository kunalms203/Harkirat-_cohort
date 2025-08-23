"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (a, b) => {
    console.log(a + b);
};
sum(5, 10);
const a = 15;
class Employee {
    name;
    age;
    constructor(n, a) {
        this.age = a;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
//# sourceMappingURL=a.js.map