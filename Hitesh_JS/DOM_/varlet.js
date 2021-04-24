console.log(name);

var name = "harsh";   //when used var, then it doesn't give error, instead show undefined though let is used for backend.

if(true) {
    let lastName = "Shukla";
}
console.log(lastName);  //using var printing lastname even outside the if condition, that is not a good thing
//but let variable gone as the scope ends, that's why mostly in loops let is used.