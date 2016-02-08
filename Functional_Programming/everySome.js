/*
Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

*/


function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    if (goodUsers.length < submittedUsers.length || goodUsers.length > submittedUsers.length) {
      return goodUsers.some(function(index){
        return submittedUsers.id === index.di;
      });
    }
    else if (goodUsers.length === submittedUsers.length) {
      return goodUsers.every(function(index){
        return submittedUsers.id === index.id;
      });
    }
  };
}

module.exports = checkUsersValid;
