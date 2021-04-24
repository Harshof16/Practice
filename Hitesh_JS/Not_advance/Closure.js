//Closure
function init(){
    var firstName = "harsh";
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}            
          //Lexical scoping
init();   
/*// Alternative,
 var value = init();
  value();  
  Now it can print firstname
*/
console.log(firstName);  //firstName here is out of scope, that's why it is not defined in the context
