//class is a blueprint for creating Objects
//also comes with method(constructor)

class User{
  constructor(name, email){   //Constructor is a method that runs as soon as object is created
      this.name = name;
      this.email = email;
  }
  courseList = [];

  getInfo(){
      return {name: this.name, email: this.email};
  }
  enrollCourse(name){
      this.courseList.push(name);
  }
  getCourseList(){          //getter, to grab this information from a class
      return this.courseList;
  }
}
//getter, usually return the variables
//setter, expect the some parameters
module.exports = User;    //exporting entire Class, now any file can access this class by `import User from "./class.js"` 

const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Java");
console.log(rock.getCourseList());
console.log(rock.courseList);