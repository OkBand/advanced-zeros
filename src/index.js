module.exports = function getZerosCount(number, base) {
  for (var i = 2; i <= base; i++) {   //finding prime factors
    if (base % i === 0) {
         base = base/i;
      var a = 0;
      var b = Math.floor(number/i);
      while (b > 0) {
        a = a + b;
        b = Math.floor(b/i);
      };
      var zeros = a;
    };
  };
  return zeros;
}
