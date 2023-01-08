const ProductService = require('../productServiceNoDi');
const ProductClient = require('../productClient.js');

// 실제 ProductClient함수를 사용하는 것 이 아니라 mock으로 사용할거야 !
jest.mock('../productClient');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'MILK', available: true },
    { item: 'BANANA', available: false },
  ]);

  // mockImplementation = mock 함수 연결 ..?
  // ProductClient => 이 함수가 네트워크 상의 문제든 뭐든 문제가 생겨도, (무관하게) 분리해서 테스트 가능 !
  ProductClient.mockImplementation(() => {
    return { fetchItems: fetchItems };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'MILK', available: true }]);
  });
});
