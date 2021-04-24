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
    static login(){            //private property, can't be inherit
        return "You are logged in";
    }
  }

  class SubAdmin extends User{       //inherting the properties of parent class
      constructor(name,email){       
          super(name,email);        //Calls the parent constructor
      }
      getAdminInfo(){
          return "I'm subadmin";
      }
      login(){
          return "login for admin only";  //Method overwriting, incase previous method has same name and is not private
      }
  }

  module.exports = User;    //exporting entire Class, now any file can access this class by `import User from "./class.js"` 
  
  const rock = new User("rock", "rock@gmail.com");
  console.log(rock.getInfo());
  rock.enrollCourse("Java");
  console.log(rock.getCourseList());
  console.log(rock.courseList);

  const tom = new SubAdmin("Tom","Tom@outlook.com");
  console.log(tom.getAdminInfo());
  console.log(tom.getInfo());
  console.log(tom.login());