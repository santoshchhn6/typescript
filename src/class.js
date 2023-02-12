//----------------Example 1-----------------
class User5 {
    constructor(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
}
let newuser = new User5("santosh", "santosh@gmail.com");
newuser.city = "mumbai";
console.log(newuser);
//----------------Example 2-----------------
//Public and Private
//User6 and user7 are same
class User6 {
    constructor(name, email, userId) {
        this.city = "";
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}
class User7 {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "";
    }
}
//----------------Example 3-----------------
//Getter,Setter
class User8 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.age = 18; //'age' not accessible outside this class,we can use getter and setter method to access 'age' outside of this class.
    }
    set setAge(age) {
        if (age >= 18) {
            this.age = age;
        }
        else {
            throw new Error("Under age!");
        }
    }
    get getAge() {
        return this.age;
    }
}
let nuser = new User8("santosh", "saf");
nuser.setAge = 12;
console.log(nuser.getAge);
