import { TokenRepository } from '../repositories/token';

export class TempPage {

  static inject() { return [TokenRepository]; }

  constructor(repo) {
    this.repo = repo;
    this.tokenValid = false;
  }

  activate(params) {
    return this.repo.validate(params.token).then(response => {
      this.tokenValid = response;
    });
  }
}
