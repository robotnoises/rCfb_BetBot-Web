var baseApi = "http://localhost:52857/api/";

var token = {
  validate: function (token) { return baseApi + 'token/validate/' + token }
}

Object.freeze(token);

export class Urls {

  get baseApi() {
    return baseApi;
  }

  get token() {
    return token;
  }
}
