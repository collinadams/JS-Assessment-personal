exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileList = [];
    var directoriesVisited = [];

    var processDir = function(dir){
      directoriesVisited.push(dir.dir);

      dir.files.forEach(function(file){
        if(typeof file === 'string'){
          if(!dirName || directoriesVisited.indexOf(dirName) > -1){
            fileList.push(file);
          }
        }else{
          processDir(file);
        }
      });
      directoriesVisited.pop();
    };
    processDir(data);
    return fileList;
  },

  permute: function(arr) {
    var allPerms = [];
    var generatePerms = function(permArrSoFar, optionsLeft){

        if(permArrSoFar.length === arr.length){
          var temp = [];
          for(var i = 0; i < permArrSoFar.length; i++){
            temp.push(permArrSoFar[i])
          }
          allPerms.push(temp);
          return;
        }
        for(var i = 0; i < optionsLeft.length; i++){
          permArrSoFar.push(optionsLeft[i]);
          generatePerms(permArrSoFar, optionsLeft.slice(0, i).concat(optionsLeft.slice(i + 1)));
          permArrSoFar.pop();
        }
      };
      generatePerms([], arr);
      return allPerms;
  },

  fibonacci: function(n) {
    if(n < 2){
      return n;
    }else{
      return exports.recursionAnswers.fibonacci(n - 1) + exports.recursionAnswers.fibonacci(n-2);
    }
  },

  validParentheses: function(n) {
    if(n < 1){
      return [];
    }else if(n === 1){
      return ['()'];
    }else{
      var innerCombos = exports.recursionAnswers.validParentheses(n - 1);
      var comboHashMap = {};

      for(var i = 0; i < innerCombos.length; i++){
        var innerCombo = innerCombos[i];
        comboHashMap['(' + innerCombo + ')'] = true;
        comboHashMap['()' + innerCombo] = true;
        comboHashMap[innerCombo + '()'] = true;
      }
      var comboList = [];
      for(var combo in comboHashMap){
        comboList.push(combo);    
      }
      return comboList;
    }
  }
};
