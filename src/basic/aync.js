function fetchProduct(error) {
  if (error === 'error') {
    return Promise.reject('network Error');
  }
  return Promise.resolve({ item: '🥛Milk', price: 200 });
}

module.exports = fetchProduct;
