var baseApi = "http://localhost:52857/api/";

var tempPage = {
  validate: function (token) { return baseApi + 'temppage/validate/' + token },
  betData: function (token) { return baseApi + 'temppage/bet/' + token }
}

Object.freeze(tempPage);

export class Urls {

  get baseApi() {
    return baseApi;
  }

  get tempPage() {
    return tempPage;
  }
}
