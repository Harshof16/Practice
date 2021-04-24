var counter= document.querySelector(".counter");
var followers= document.querySelector(".followers");

let count =1;

setInterval(() => {        //after 1000 the numbers won't increase
    if(count < 1000){
        count++;                // Or till 1000 the numbers keep increasing 1millisecond/number
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram";
}, 8000);    // after 8000 milliseconds this sentence will appear        