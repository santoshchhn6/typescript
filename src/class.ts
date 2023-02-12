//----------------Example 1-----------------
class User5 {
  name: string;
  email: string;
  city: string = "";

  constructor(name: string, email: string) {
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
  public name: string;
  public email: string;
  private userId: number;
  public city: string = "";
  constructor(name: string, email: string, userId: number) {
    this.name = name;
    this.email = email;
    this.userId = userId;
  }
}

class User7 {
  city: string = "";
  constructor(
    public name: string,
    public email: string,
    private userId: number
  ) {}
}

//----------------Example 3-----------------
//Getter,Setter
class User8 {
  private age: number = 18; //'age' not accessible outside this class,we can use getter and setter method to access 'age' outside of this class.
  constructor(public name: string, public email: string) {}

  set setAge(age: number) {
    if (age >= 18) {
      this.age = age;
    } else {
      throw new Error("Under age!");
    }
  }

  get getAge(): number {
    return this.age;
  }
}

let nuser = new User8("santosh", "saf");
nuser.setAge = 22;
console.log(nuser.getAge);

//----------------Example 4-----------------
//Protected
class User9 {
  protected id: number = 0; // only accesible to class which extend this class
  constructor(public username: string, public email: string) {}
}

class Admin3 extends User9 {
  changeId() {
    this.id = 34;
  }
}
