import { BetRepository } from '../repositories/betRepository';
import { Redirect } from 'aurelia-router';

export class Bet {

  static inject() { return [BetRepository]; }

  constructor(repo) {
    this.repo = repo;
    this.betData = {};
    this.hasChallenger = false; // betData["challenger"].length > 0 || false;
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
