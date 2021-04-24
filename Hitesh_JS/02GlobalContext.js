//function can be called before due to global context
tipper("15");
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 4);
}

//variable can't be called before, they are set as undefined
bigTipper("80");
var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 4);
}

//name will be printed as undefined
console.log(name);
var name = "hitesh";

