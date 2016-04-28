exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    var setNextTimeout = function(){
      console.log(start++);

      if(start <= end){
        timeout = setTimeout(setNextTimeout, 100);
      }
    };

    setNextTimeout();

    return {
      cancel: function(){
        clearTimeout(timeout);
      }
    }
  }
};
