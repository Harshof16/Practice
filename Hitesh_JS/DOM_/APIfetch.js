fetch(`https://api.chucknorris.io/jokes/random`)
 .then(Response => {
     return Response.json();
 })
 .then((data) => {
     // console.log("DATA is: ", data);
     var joke = data.value;
     console.log("JOKE", joke);
 })
 .catch();