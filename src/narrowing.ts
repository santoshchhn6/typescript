//----------------Example 1-----------------
//truthness narrowing
function printAll(msg: string | string[] | null) {
  if (msg) {
    if (typeof msg === "object") {
      for (const s of msg) {
        console.log(s);
      }
    } else if (typeof msg === "string") {
      console.log(msg);
    }
  }
}

printAll(["hello", "world"]);

//----------------Example 2-----------------
//Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

//----------------Example 3-----------------
//in operator narrowing

type Fish = { swim(): void };
type Bird = { fly(): void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

//----------------Example 4-----------------
//instanceof narrowing

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue("Santosh");
logValue(new Date());
