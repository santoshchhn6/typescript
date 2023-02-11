//----------------Example 1-----------------
const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

let seat = SeatChoice.AISLE;
console.log(seat);

//----------------Example 2-----------------
const enum SeatChoice2 {
  AISLE = 10,
  MIDDLE = "Middle",
  WINDOW = 12,
}

let seat2 = SeatChoice2.AISLE;
console.log(seat2);
