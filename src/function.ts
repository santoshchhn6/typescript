//----------------Example 1-----------------
function add(a: number, b: number): number {
  return a + b;
}

let result = add(4, 5);
console.log(result);

//----------------Example 2-----------------
//Default Parameter
function addTwo(a: number, b: number = 2): number {
  return a + b;
}

result = addTwo(4);
console.log(result);

//----------------Example 3-----------------
//void
function DisplayError(message: string): void {
  console.log(message);
}

//----------------Example 4-----------------
//'never' return type used for throwing error or terminating a program
function fail(msg: string): never {
  throw new Error(msg);
}

//----------------Example 5-----------------
function setId(id: number | string) {
  if (typeof id === "string") {
    id.toLocaleLowerCase();
  }
}
