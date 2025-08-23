enum Directions {
    right = "right",
    left = "left",
    up = "up",
    down = "down"
}

// enum Directions {
//     right ,
//     left ,
//     up ,
//     down
// }

function doSomething(keyPressed : Directions):void{
    console.log(keyPressed);
}

doSomething(Directions.down);