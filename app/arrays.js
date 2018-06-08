exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var total = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      total += arr[i];
    }
    return total;
  },

  remove: function(arr, item) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        ret.push(arr[i]);
      }
    }
    return ret;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
        len -= 1;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      // console.log('hey');
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var i,
      map = {},
      size;
    for (i = 0, size = arr.length; i < size; i++){
      if (map[arr[i]]){
        return false;
      }
      map[arr[i]] = true;
    }
    return map;
  },

  square: function(arr) {
    var squaredValue = [];
    for (var i = 0, length = arr.length; i < length; i++) {
      squaredValue.push(arr[i] * arr[i]);
    }
    return squaredValue;
  },

  findAllOccurrences: function(arr, target) {
    var i,
      list = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        list.push(i);
      }
    }
    return list;
  }
};
