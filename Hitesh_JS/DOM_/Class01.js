//import User from "./Class.js";

const User = require("./Class.js");

const harsh = new User("harsh", "harsh@gmail.com");

console.log(harsh.getInfo());
harsh.enrollCourse("ReactJS");
harsh.enrollCourse("Java");

console.log(harsh.getCourseList());

let course = harsh.getCourseList();

course.forEach( (c) => console.log(c));