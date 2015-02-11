import { BetRepository } from '../repositories/betRepository';
import { Redirect } from 'aurelia-router';

export class Bet {

  static inject() { return [BetRepository]; }

  constructor(repo, show) {
    this.betData = {};
    this.repo = repo;
  }

  canActivate(params) {
    return this.repo.validate(params.token).then(isValid => {
      if (!isValid) return new Redirect('/error');
    });
  }

  activate(params) {
    return this.repo.getBetData(params.token).then(data => {
      this.betData = data;
      this.hasChallenger = data.challenger !== null && data.challenger.length > 0
    });
  }

  hasChallenger() {
    return this.betData['challenger'].length > 0;
  }
}
