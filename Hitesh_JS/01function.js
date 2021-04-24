/* Define the function that define the role of a user */

/* var getUserRole = function(name,Role){ 
    OR
   var getUserRole = (name,Role) => {    */

function getUserRole(name, Role){
    switch(Role){
        case "admin":
            return `${name} is admin with all access`;
            break; //break is not necessary here as return is used
        case "subadmin":
            return `${name} is sub-admin with access to create and delete the courses`;
            break;
        case "testprep":
            return `${name} is a test prep with access to create and delete the tests`;
                //removed break and its still working fine
        case "user":
            return `${name} is a user to consume content`;
           break;

        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("hitesh", "testprep"));

var getRole = getUserRole("sammy", "user");
console.log(getRole);