//For the given JSON iterate over all for loops (for, for in, for of, forEach)

var game = [{
    name:"Rohan George",
    age:24,
    email:"rohangeorge@gmail.com",
    team: "Manchester United",
    play:true
    
},{
    name:"Rohge",
    age:24,
    email:"rohage@gmail.com",
    team: "Chealse",
    play:false

},{
    name:"Sampatge",
    age:22,
    email:"asdamail.com",
    team: "Cheafflse",
    play:true

},{
    name:"lash",
    age:23,
    email:"asdafa@gmail.com",
    team: "Madrid",
    play:false
}]
for(var i=0;i<game.length;i++){ //for loop
    console.log(game[i])
}
console.log("---------------x--------------x-----------------x------------------------x-----------------------x---------------")
for(var i in game){
    console.log(game[i]) //for in loop
}
console.log("---------------x--------------x-----------------x------------------------x-----------------------x---------------")

for (var value of game) { //for-of loop
    console.log(value)
}
console.log("---------------x--------------x-----------------x------------------------x-----------------------x---------------")

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item) { 
  sum += item;
  console.log(sum)
}