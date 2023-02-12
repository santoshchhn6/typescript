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
