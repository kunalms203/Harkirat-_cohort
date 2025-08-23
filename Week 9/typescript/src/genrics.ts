// 1. Without Generics (problem: not reusable & loses type info)
function identityWithoutGenerics(value: any): any {
    return value;
}

let noTypeSafety = identityWithoutGenerics("Hello");
// noTypeSafety is 'any', so TS can't help us here
noTypeSafety.toFixed(); // ❌ runtime error


// 2. With Generics (T is a type placeholder)
function identity<T>(value: T): T {
    return value;
}

let strValue = identity<string>("Hello"); // T = string
let numValue = identity<number>(42);      // T = number

console.log(strValue.toUpperCase()); // ✅ works
console.log(numValue.toFixed(2));    // ✅ works


// 3. Type Inference (no need to manually specify T)
let inferredString = identity("Kunal"); // TS infers T = string
let inferredNumber = identity(123);     // TS infers T = number


// 4. Generic Interfaces
interface Box<T> {
    contents: T;
}

let stringBox: Box<string> = { contents: "A string" };
let numberBox: Box<number> = { contents: 99 };


// 5. Generic Classes
class DataHolder<T> {
    private data: T;
    constructor(initial: T) {
        this.data = initial;
    }
    getData(): T {
        return this.data;
    }
    setData(newData: T): void {
        this.data = newData;
    }
}

let stringHolder = new DataHolder<string>("Hello");
stringHolder.setData("World");
console.log(stringHolder.getData()); // "World"


// 6. Generic Constraints (limit what T can be)
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log("Length:", item.length);
}

logLength("Hello");    // Works (string has length)
logLength([1, 2, 3]);  // Works (array has length)
// logLength(42);      // ❌ Error: number doesn't have length


// 7. Multiple Type Parameters
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let merged = mergeObjects({ name: "Kunal" }, { age: 21 });
console.log(merged.name, merged.age);
