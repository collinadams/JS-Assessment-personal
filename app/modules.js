exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var module = {};
    module.name = str2;
    module.greeting = str1;
    module.sayIt = function(){
      return module.greeting + ', ' + module.name;
    };
    return module;
  }
};
