//Generic are like component that can be reused.
//----------------Example 1-----------------
function identity<Type>(arg: Type): Type {
  return arg;
}

identity("santosh"); // accept and return string type
identity(10); // accept and return number type
identity(true); // accept and return boolean type

//----------------Example 2-----------------
//identity1 ,identity2 and identity3 are same
//we can write any one of following for generic type
function identity1<Type>(arg: Type): Type {
  return arg;
}
//short form eg. <T>,<H>
function identity2<T>(arg: T): T {
  return arg;
}
const identity3 = <T>(arg: T): T => {
  return arg;
};

//----------------Example 3-----------------
//custom type
type User10 = {
  name: string;
  age: number;
};

const identity4 = <User10>(val: User10): User10 => {
  return val;
};

//----------------Example 4-----------------
//generic constrain

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};
