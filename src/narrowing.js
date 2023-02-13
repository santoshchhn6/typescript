//----------------Example 1-----------------
//truthness narrowing
function printAll(msg) {
    if (msg) {
        if (typeof msg === "object") {
            for (const s of msg) {
                console.log(s);
            }
        }
        else if (typeof msg === "string") {
            console.log(msg);
        }
    }
}
printAll(["hello", "world"]);
//----------------Example 2-----------------
//Equality narrowing
function example(x, y) {
    if (x === y) {
        x.toLowerCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
//----------------Example 4-----------------
//instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue("Santosh");
logValue(new Date());
