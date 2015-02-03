import { Urls } from '../settings/urls';
import { Keys } from '../settings/keys';
import { HttpClient } from 'aurelia-http-client';

export class TokenRepository {

  static inject() { return [Urls, Keys, HttpClient]; }

  constructor(urls, keys, http) {
    this.urls = urls;
    this.keys = keys;
    this.http = http;
  }

  validate(token) {
    var url = this.urls.token.validate(token);
    var validKey = this.keys.token.isValid;

    return this.http.post(url).then(response => {
      return response.content[validKey];
    });
  }
}
