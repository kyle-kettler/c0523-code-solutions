const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const objectPrices = prices.map((element) => ({
  price: element,
  salePrice: element / 2,
}));
console.log('Price objects', objectPrices);

const formattedPrices = prices.map((element) => '$' + element.toFixed(2));
console.log('Formatted prices', formattedPrices);
