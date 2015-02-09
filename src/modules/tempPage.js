import { TempPageRepository } from '../repositories/tempPageRepository';
import { Redirect } from 'aurelia-router';

export class TempPage {

  static inject() { return [TempPageRepository]; }

  constructor(repo) {
    this.repo = repo;
    this.betData = {};
  }

  canActivate(params) {
    return this.repo.validate(params.token).then(isValid => {
      if (!isValid) return new Redirect('/error');
    });
  }

  activate(params) {
    return this.repo.getBetData(params.token).then(data => {
      this.betData = data;
    });
  }
}
