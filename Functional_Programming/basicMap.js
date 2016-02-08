/*
Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    ## Arguments

      * numbers: An Array of 0 to 20 Integers between 0 and 9

    ## Conditions

      * Your solution should use Array.prototype.map()
      * Do not use any for/while loops or Array.prototype.forEach.
      * Do not create any unecessary functions e.g. helpers.

*/
//Correct
function doubleAll(numbers) {
 var x =  numbers.map(function(num){
    return num *2;
  });
  return x;
    }

module.exports = doubleAll;

/* NodeSchool Solution:

function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
