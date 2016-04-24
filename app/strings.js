exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '' + str[0];
    var currentConsecs = 1;
    for(var i = 1; i < str.length; i++){
      if(str[i] === str[i - 1]){
        currentConsecs++;
        if(currentConsecs <= amount){
          result += str[i];
        }
      }else{
        result += str[i];
        currentConsecs = 1;
      }
    }
    return result;
  },
  wordWrap: function(str, cols) {
    var arrOfWords = str.split(' ');
    var result = '';
    var seperator = '';
    var currLength = 0;
    var currWord;
    for(var i = 0; i < arrOfWords.length; i++){
      currWord = arrOfWords[i];
      currLength += currWord.length;

      if(i === 0){
        seperator = '';
      }
      else if(currLength > cols){
        seperator = '\n';
        currLength = currWord.length;
      }else{
        seperator = ' ';
      }

      result += seperator + currWord;
    }
    return result;
  },
  reverseString: function(str) {
    //strings immutable, so convert to array for changing, then convert back to string for return value
    var temp;
    str = str.split('');
    for(var i = 0; i < Math.floor((str.length)/2); i++){
      temp = str[i];
      str[i] = str[str.length - 1 - i];
      str[str.length - 1 - i] = temp;
    }
    return str.join('');
  }
};
