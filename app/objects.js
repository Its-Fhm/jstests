exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var retObj = [];

    for (var props in obj) {
      if (obj.hasOwnProperty(props)) {
        retObj.push(props + ': ' + obj[props]);
      }
    }

    return retObj;
  }
};
