const harsh = {
    firstName : "harsh",
    lastName : "Shukla",
    role : "User",
    courseCount : 2,
    getInfo : function (){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

//harsh.getInfo();  //due to this keyword in object harsh, the values can be printed and function can be called.
//dj.getInfo();   //this'll not print, means this is not pointing to dj yet

//For this we use bind, so that it binds the objects

harsh.getInfo.bind(dj)();  //Bind is referencing to dj
//OR
var djInfo = harsh.getInfo.bind(dj);
djInfo(); //It's still giving us a reference back

//harsh.getInfo.call(dj); //Or call just directly calls it.