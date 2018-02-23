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

var pthreeName = prompt("Name 3?");
var thAge = prompt("pthreeAge?");
var pthreeAge = parseInt(thAge);
var thHeight = prompt("pthreeHeight?");
var pthreeHeight = parseInt(thHeight);

console.log(pthreeName + " is of " + pthreeAge + " years old and his height is " + " " + pthreeHeight); 

var poneValue = poneHeight + (5 * poneAge);
console.log(poneValue);
var ptwoValue = ptwoHeight + (5 * ptwoAge);
console.log(ptwoValue);
var pthreeValue = pthreeHeight + (5 * pthreeAge);
console.log(pthreeValue);

if (poneValue>ptwoValue && poneValue>pthreeValue){
    alert(poneName +" "+ "wins!");
}
else if (ptwoValue>poneValue && ptwoValue>pthreeValue){
    alert(ptwoName +" "+ "wins!");
}
else if(pthreeValue>poneValue && pthreeValue>ptwoValue){
    alert(pthreeName +" "+ "wins!" );
}
else{    alert("Draw!")
}
