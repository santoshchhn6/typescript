function add(a, b) {
    return a + b;
}
var result = add(4, 5);
console.log(result);
//Default Parameter
function addTwo(a, b) {
    if (b === void 0) { b = 2; }
    return a + b;
}
result = addTwo(4);
console.log(result);
