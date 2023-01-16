class UserClient {
  login(id, password) {
    return fetch('http://expample.com/login/id_passwword').then((response) => {
      response.json();
    });
  }
}

module.exports = UserClient;
