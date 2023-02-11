function add(a: number, b: number): number {
  return a + b;
}

let result = add(4, 5);
console.log(result);

//Default Parameter
function addTwo(a: number, b: number = 2): number {
  return a + b;
}

result = addTwo(4);
console.log(result);

//void
function DisplayError(message: string): void {
  console.log(message);
}

//'never' return type used for throwing error or terminating a program
function fail(msg: string): never {
  throw new Error(msg);
}
