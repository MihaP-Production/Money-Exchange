// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	
  let result = {};
  if (currency <= 0) {
    return result
  }
  if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }
  if (currency >= 50) {
    result.H = Math.floor(currency/50);
    currency = currency%50;
  }
  if (currency >= 25) {
    result.Q = Math.floor(currency/25);
    currency = currency%25;
  }
  if (currency >= 10) {
    result.D = Math.floor(currency/10);
    currency = currency%10;
  }
  if (currency >= 5) {
    result.N = Math.floor(currency/5);
    currency = currency%5;
  }
  if (currency >= 1) {
    result.P = Math.floor(currency/1);
    currency = currency%1;
  }
  return result;
}
