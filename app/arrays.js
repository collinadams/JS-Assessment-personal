exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++){
      result += arr[i];
    }
    return result;
  },

  remove : function(arr, item) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        continue;
      }else{
        result.push(arr[i]);
      }
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    var recurse = function(array, target){
      for(var i = 0; i < array.length; i++){
        if(array[i] === target){
          array.splice(i, 1);
          recurse(array, target);
        }
      }
    }
    recurse(arr, item);
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    var secondSeg = arr.slice(index);
    var result = arr.slice(0, index);
    result.push(item);
    return result.concat(secondSeg);
  },

  count : function(arr, item) {
    return arr.reduce(function(accum, next){
      if(next === item){
        accum++;
      }
      return accum;
    }, 0);
  },

  duplicates : function(arr) {
    var result = [];
    var countObj = arr.reduce(function(accum, next){
      accum[next] = accum[next] || 0;
      accum[next]++;
      return accum;
    }, {});
    for(var key in countObj){
      if(countObj[key] > 1){
        result.push(+key);
      }
    }
    return result;
  },

  square : function(arr) {
    return arr.map(function(value){
      return value * value;
    });
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }
};
