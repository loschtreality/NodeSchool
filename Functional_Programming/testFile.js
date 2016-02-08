console.log("hello");

console.log(
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue) {
  return previousValue + currentValue;
}));

var type = [1,2,3,4,6] //type can be an array, string, and maybe an object. An array of numbers will be reduced to a single number, such as an array of strings will be reduced to a single string

var x=
type.reduce(function(a,b){
  return a + b;
});

console.log(x);
console.log(typeof x);
