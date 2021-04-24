
const Myuser = {
    name : "harsh",
    courseCount : 5,
    role : "user",  
};

console.log(Myuser.courseCount);
//OR
const { name, courseCount, role } = Myuser;  //Destructuring, for this no and name of properties should be same
console.log(courseCount);

//Destructuring can also happen in arrays.