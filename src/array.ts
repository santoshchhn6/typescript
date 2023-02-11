//----------------Example 1-----------------
const heros = ["thor", "ironman", "spiderman"]; //Implicit

heros.map((hero): string => `hero is ${hero}`);

//----------------Example 2-----------------
const superHeros: string[] = []; //Explicit
//OR
const heroPower: Array<String> = [];

superHeros.push("thor");

//----------------Example 3-----------------
type Person = {
  name: string;
  age: number;
};
const Persons: Person[] = [];

//----------------Example 4-----------------
const matrix: number[][] = [];

//----------------Example 5-----------------
const data: (string | number)[] = [1, "2", 3];
