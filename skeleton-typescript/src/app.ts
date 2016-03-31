import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = 'Aurelia Route test';
		// config.map([
		//   { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
		//   { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
		//   { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
		//   { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
		// ]);

		config.map([
			{ route: ':language', name: 'language', moduleId: 'language-layout' },
			{ route: '', redirect: "en" },
		]);

		this.router = router;
	}
}
