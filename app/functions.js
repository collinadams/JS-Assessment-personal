exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
   return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(secondStr){
      return str + ', ' + secondStr;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(val){
      return function(){
        return fn(val);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    var args = Array.prototype.slice.apply(arguments);
    var result = 0;
    args.forEach(function(arg){
      result += arg;
    });
    return result;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    exports.functionsAnswers.argsAsArray(fn, args);
  },

  partialUsingArguments : function(fn) {
    var outerArgs = Array.prototype.slice.call(arguments, 1);
    return function(){
      var innerArgs = Array.prototype.slice.call(arguments);
      if(outerArgs.length < 1){
        return fn.apply(null, innerArgs);
      }else{
        return fn.apply(null, outerArgs.concat(innerArgs));      
      }
    }
  },

  curryIt : function(fn) {
    var argAccumulator = function(accumArgs, expectedArgs){
      return function(currentArg){
        accumArgs.push(currentArg);
        if(accumArgs.length === expectedArgs){
          return fn.apply(null, accumArgs);
        }else{
          return argAccumulator(accumArgs, expectedArgs);
        }
      };
    };
    return argAccumulator([], fn.length)
  }
};
