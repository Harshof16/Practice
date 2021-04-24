//creating object via functional approach, defining constructor
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
         console.log(`Course count is: ${this.courseCount}`);
    };
}

//adding new property in the User, from the outside
User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
}

//new keyword is introduced so that it doesn't become a regular function call
//making instances of object User
var harsh = new User("harsh", 3);
harsh.getCourseCount();
if(harsh.hasOwnProperty("firstName")){  //first checks the property, if it exists in object harsh then it'll call that property
    harsh.getFirstName();
}
//console.log(harsh);

var sam = new User("sam", 1);
//console.log(sam);
sam.getFirstName();