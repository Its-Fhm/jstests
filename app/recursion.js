exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listTheFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var myFile;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        myFile = files[i];
        if (typeof myFile === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listTheFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);

    return listTheFiles;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
