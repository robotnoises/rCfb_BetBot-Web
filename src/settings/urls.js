var baseApi = "http://localhost:52857/api/";

var bet = {
  validate: function (token) { return baseApi + 'temppage/validate/' + token },
  betData: function (token) { return baseApi + 'temppage/bet/' + token },
  update: function () { return baseApi + 'bet/'}
}

Object.freeze(bet);

export class Urls {

  get baseApi() {
    return baseApi;
  }

  get bet() {
    return bet;
  }
}
