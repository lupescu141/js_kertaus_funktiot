const movielist = [];
const movie = {
  tittle: "",
  rating: "",
};

const movieSum = prompt("how many movies would you like to rate?");

for (i = 1; i <= movieSum; i++) {
  
  movie.tittle = prompt("enter " + i + " movie tittle:");
  movie.rating = prompt("enter " + i + " movie rating:");
  movielist.push(JSON.parse(JSON.stringify(movie)));
}

movielist.sort((a, b) => b.rating - a.rating);
console.log(movielist)

let textnode = document.createTextNode(JSON.stringify(movielist));
document.body.appendChild(textnode);
const br = document.createElement("BR");
document.body.appendChild(br);
textnode = document.createTextNode("Highest rate movie: " + JSON.stringify(movielist[0]));
document.body.appendChild(textnode);