//Example 1
type User = {
  name: string;
  age: number;
};

function createUser(user: User) {}
createUser({ name: "santosh", age: 29 });

//Example 2
type User2 = {
  readonly _id: string; //readonly
  name: string;
  age: number;
  email?: string; //optional
};

let newUser: User2 = {
  _id: "123",
  name: "santosh",
  age: 29,
};

newUser.name = "suraj";
newUser.age = 24;
