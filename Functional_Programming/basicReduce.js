/*Task

Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

## Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

## Arguments

  * inputWords: An array of random Strings.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unecessary functions e.g. helpers.
  */

  function countWords(inputWords) {
    var obj = {};
    inputWords.reduce(function(prev,curr){
      obj[curr] = curr;
    });
    return obj;
  }



  var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

  console.log(countWords(inputWords));

    module.exports = countWords;
/*
https://github.com/nodeschool/discussions/issues/309
*/
