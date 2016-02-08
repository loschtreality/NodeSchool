function getShortMessages(messages) {
      return messages.map(function(input){ return input.message;}).filter(function(sort){ return sort.length <= 50;});
    }


module.exports = getShortMessages;
