module.exports = function getZerosCount(number, base) {
  var primes = [];
  for (var i = 2; i <= base; i++) {
    while (base % i === 0) {
      primes[i] = primes[i] + 1;
      base = base / i;
    };
  };

  var zeros = 0;
  for (var i = 2; i < primes.length; i++) {
    var a = 0;
    var b = Math.floor(number / i);
    while (b > 0) {
      a = a + b;
      b = Math.floor(b / i);
    };
    var zeros = a;
  };
  return zeros;
}
