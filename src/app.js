import { Router } from 'aurelia-router';

export class App {

  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {

      config.title = 'r/cfb BetBot';

      config.mapUnknownRoutes('./modules/errors');

      config.map([
        {
          route: ['t/:token'],
          moduleId: './modules/tempPage',
          nav: false
        }
      ]);

    });
  }
}
