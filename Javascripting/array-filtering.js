var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function (argument) {
  return argument%2 === 0;
});
console.log(filtered);


/* AS A HIGHER ORDER FUNCTION
function callbackFilter(array,callback){
  return array.filter(callback);
}

function call(argument) {
  return argument%2 === 0;
}

console.log(callbackFilter(numbers,call)); */
