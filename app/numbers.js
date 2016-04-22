exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    var result = 0; 
    for(var i = 0; i < str.length; i++){
      result += (Math.pow(2, str.length - 1 -i) * (+(str[i])));
    }
    return result;
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
