//----------------Example 1-----------------
interface Animal {
  readonly legs: number;
  sound(): string;
}

let cat: Animal = {
  legs: 4,
  sound() {
    return "mew mew";
  },
};

//----------------Example 2-----------------
//Reopening of interface
interface Robot {
  leg: number;
  arm: number;
  walk(): void;
}

interface Robot {
  run(): void;
}

let robot1: Robot = {
  leg: 2,
  arm: 2,
  walk() {},
  run() {},
};

//----------------Example 3-----------------
//Extend
interface User4 {
  username: string;
  email: string;
}

interface Admin2 extends User4 {
  isAdmin: boolean;
}

let user1: Admin2 = {
  username: "santosh",
  email: "santosh@gmail.com",
  isAdmin: false,
};
