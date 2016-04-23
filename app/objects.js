exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    var newFunc = fn.bind(obj);
    return newFunc();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var result = [];
    for(var prop in obj){
      if(obj.hasOwnProperty(prop)){
        result.push(prop + ': ' + obj[prop]);
      }
    }
    return result;
  }
};
