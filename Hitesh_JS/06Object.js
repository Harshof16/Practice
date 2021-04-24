/* adding courseName in courseList in our buyCourse */
var user = {
    firstName : "Harsh",
    LastName : "Valia",
    role : "User",
    googleSigneIn : true,     //On left hand side is key and on right hand side is value
    courseList : [],
    buyCourse :function (courseName) {  //inserting a function
     this.courseList.push(courseName);            //same as user but as we accessing this inside same object so, 'this'
    },
    getCourseCount :function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
};

/* console.log(user.firstName); //to access this key of object user
// or define it as
console.log(user["LastName"]); //but not recommended

user.role = "Admin";
console.log(user.role);

console.table(user); */

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
console.log(user.getCourseCount());

console.info(user);