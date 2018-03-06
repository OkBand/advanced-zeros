module.exports = function getZerosCount(number, base) {
//Finding prime factors of the base and their powers
  var sqrtBase = Math.sqrt(base);
  var i;
  var primes = []; //an array of prime factors
  var powers = []; //an array of their powers
    for (i = 2; i <= sqrtBase; i++ ) {
      if (base % i === 0) {
        var p = 0;
        while (base % i === 0) {
          base = base / i;
          p++;
        };
        primes.push(i);
        powers.push(p);
        sqrtBase = Math.sqrt(base);
      };
    };
    if ( base != 1 ) {
      primes.push(base);
      powers.push(1);
    };
//Counting the number of prime factor multiplications in the number
  var zeros = 0;
  var length = primes.length;
  var numberPrimes = [];
  for (i = 0; i< length; i++) { //iterating prime factors
    var factor = primes[i];
    var counter = 0; //how many times we can divide the number by the given factor increasing its power in each iteration
      while (number / factor >= 1) {
        counter = counter + (Math.floor(number / factor));
        factor = factor * primes[i];
      };
      numberPrimes[i] = Math.floor(counter / powers[i]); //dividing the counter by the power of the given factor (because for some bases, such as 16 = 2^4, we need to find a group of equal factors: 2 * 2 * 2 *2)
    };
    zeros = Math.min.apply(null, numberPrimes); //finding the rarest factor (such as 5 for base 10)
  return zeros;
}
