"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directions;
(function (Directions) {
    Directions["right"] = "right";
    Directions["left"] = "left";
    Directions["up"] = "up";
    Directions["down"] = "down";
})(Directions || (Directions = {}));
function doSomething(keyPressed) {
    console.log(keyPressed);
}
doSomething(Directions.down);
//# sourceMappingURL=enum.js.map