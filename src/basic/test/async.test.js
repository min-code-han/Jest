const fetchProduct = require('../aync');

describe('Async', () => {
  it('async', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: '🥛Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();

    expect(product).toEqual({ item: '🥛Milk', price: 200 });
  });

  it('async - resolves', async () => {
    const product = await fetchProduct();

    expect(product).toEqual({ item: '🥛Milk', price: 200 });
  });
});
