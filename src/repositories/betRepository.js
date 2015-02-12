import { Urls } from '../settings/urls';
import { Keys } from '../settings/keys';
import { HttpClient } from 'aurelia-http-client';

export class BetRepository {

  static inject() { return [Urls, Keys, HttpClient]; }

  constructor(urls, keys, http) {
    this.urls = urls;
    this.keys = keys;
    this.http = http;
  }

  validate(token) {
    var url = this.urls.bet.validate(token);
    var validKey = this.keys.token.isValid;

    return this.http.post(url).then(response => {
      return response.content[validKey];
    });
  }

  getBetData(token) {
    var url = this.urls.bet.betData(token);

    return this.http.get(url).then(response => {
      return response.content; // a Bet object
    });
  }

  submit(data) {
    var url = this.urls.bet.update();

    this.http.defaultRequestHeaders.headers['Content-Type'] = 'application/json';
    console.log(this.http);
    return this.http.put(url, data).then(response => {
      return true;
    });
  }
}
