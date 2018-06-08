exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var reduceMe = new RegExp('(.)(?=\\1{' + amount + '})', 'g');
    return str.replace(reduceMe, '');
  },

  wordWrap: function(str, cols) {
    var arrayWords = [],
      wrappedString = '';

    arrayWords = str.split(' ');

    wrappedString = arrayWords[0];

    for (var i = 1; i < arrayWords.length; i++) {
      if (arrayWords[i].length > cols) {
        wrappedString += '\n' + arrayWords[i];
      } else {
        if (wrappedString.length + arrayWords[i].length > cols) {
          wrappedString += '\n' + arrayWords[i];
        } else {
          wrappedString += ' ' + arrayWords[i];
        }
      }
    }

    return wrappedString;
  },

  reverseString: function(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
};
