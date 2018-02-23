var poneName = prompt("Name 1?"); //n1 sherlock age 20 height 183
var oAge = prompt("poneAge?");
var poneAge = parseInt(oAge);
var oHeight = prompt("poneHeight?");
var poneHeight = parseInt(oHeight);

console.log(poneName + " is of " + poneAge + " years old and his height is " + " " + poneHeight);   

// var ptwoName = 'John';
// var ptwoAge = 24;
// var ptwoHeight = 172;

var ptwoName = prompt("Name 2?");
var tAge = prompt("ptwoAge?");
var ptwoAge = parseInt(tAge);
var tHeight = prompt("ptwoHeight?");
var ptwoHeight = parseInt(tHeight);

console.log(ptwoName + " is of " + ptwoAge + " years old and his height is " + " " + ptwoHeight);   


var poneValue = poneHeight + (5 * poneAge);
console.log(poneValue);
var ptwoValue = ptwoHeight + (5 * ptwoAge);
console.log(ptwoValue);

// if (poneValue>ptwoValue){
//     console.log(poneName +" "+ "wins!");
// }
// else if (ptwoValue>poneValue){
//     console.log(ptwoName +" "+ "wins!");
// }
// else{
//     console.log("Draw!")
// }
