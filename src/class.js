//----------------Example 1-----------------
var User5 = /** @class */ (function () {
    function User5(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
    return User5;
}());
var newuser = new User5("santosh", "santosh@gmail.com");
newuser.city = "mumbai";
console.log(newuser);
//----------------Example 2-----------------
//Public and Private
//User6 and user7 are same
var User6 = /** @class */ (function () {
    function User6(name, email, userId) {
        this.city = "";
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
    return User6;
}());
var User7 = /** @class */ (function () {
    function User7(name, email, userId) {
        this.name = name;
        this.userId = userId;
        this.city = "";
    }
    return User7;
}());
