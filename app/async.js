exports = typeof window === 'undefined' ? global : window;
// Wanted to clean up this file for linting warnings that I'm getting because of $.Deffered but I'm out of time.
exports.asyncAnswers = {
  async: function(value) {
    var asyncTest = $.Deferred();
    setTimeout(function() {
      asyncTest.resolve(value);
    }, 15);
    return asyncTest.promise();
  },

  manipulateRemoteData: function(url) {
    var remoteData = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      remoteData.resolve(people.sort());
    });
    return remoteData.promise();
  }
};
