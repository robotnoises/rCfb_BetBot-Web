import { Router } from 'aurelia-router';

export class App {

  static inject() { return [Router]; }

  constructor(router, redirect) {
    this.router = router;
    this.router.configure(config => {

      config.title = 'r/cfb BetBot';

      config.mapUnknownRoutes('./modules/errors');

      config.map([
        {
          route: ['t/:token'],
          moduleId: './modules/tempPage',
          title: 'Confirm your bet',
          nav: false
        },
        {
          route: ['error'],
          moduleId: './modules/errors',
          nav: false
        }
      ]);

    });
  }
}
