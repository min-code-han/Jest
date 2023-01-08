// production 용도가 아닌, test 용도로만 사용 할 것이기 때문에, test 폴더 안에 만듦

class StubProductClient {
  async fetchItems() {
    return [
      { item: 'MILK', available: true },
      { item: 'BANANA', available: false },
    ];
  }
}

module.exports = StubProductClient;
