//----------------Example 1-----------------
let score: number | string;

score = 33;
score = "44";

//----------------Example 2-----------------
type User3 = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let santosh: User3 | Admin = { name: "santosh", id: 34 };
santosh = { username: "san", id: 34 };
