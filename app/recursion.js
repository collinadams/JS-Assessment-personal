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

  },

  validParentheses: function(n) {

  }
};
