function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
let randomSelection = Math.floor(Math.random()*arr.length);
return arr[randomSelection];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;