import { TokenRepository } from '../repositories/token';
import { Redirect } from 'aurelia-router';

export class TempPage {

  static inject() { return [TokenRepository]; }

  constructor(repo) {
    this.repo = repo;
  }

  canActivate(params) {
    return this.repo.validate(params.token).then(isValid => {
      if (!isValid) return new Redirect('/error');
    });
  }
}
