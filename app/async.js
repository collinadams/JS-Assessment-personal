exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var dfd = $.Deferred();
    setTimeout(function(){
      dfd.resolve(value);
    }, 1);
    return dfd.promise();


    // return new Promise(function(resolve, reject){
    //   window.setTimeout(function(){
    //     resolve(value);
    //   }, 1000);
    // });
  },

  manipulateRemoteData : function(url) {
    var dfd = $.Deferred();

    $.ajax(url).then(function(response){
      var names = $.map(response.people, function(person){
        return person.name;
      });
      dfd.resolve(names.sort());
    });

    return dfd.promise();
  }
};
