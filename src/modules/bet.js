import { BetRepository } from '../repositories/betRepository';
import { Redirect } from 'aurelia-router';

export class Bet {

  static inject() { return [BetRepository]; }

  constructor(repo, show) {
    this.betData = {};
    this.repo = repo;
    this.hasChallenger =  true; // this.betData.challenger !== null && this.betData.challenger.length > 0;
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

  submit() {
    // Todo show modal spinner
    this.repo.submit(this.betData).then(success => {
      if (success) alert('cool!');
      else alert('shit.');
      // Kill Modal, show confirm success
    });
  }
}
