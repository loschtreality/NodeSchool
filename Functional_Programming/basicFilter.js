/*
Task

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

## Arguments

  * messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Try chaining some Array methods!

## Example

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]


  */
//Correct!
  function getShortMessages(messages) {
    return messages.map(function(input){return input.message;}).filter(function(second){return second.length < 50;});
  }

    module.exports = getShortMessages


    /* NodeSchool Solution:

    function getShortMessages(messages) {
          return messages.filter(function(item) {
            return item.message.length < 50
          }).map(function(item) {
            return item.message
          })
        }

    */
