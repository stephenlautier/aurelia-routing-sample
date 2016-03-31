import {autoinject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";

const id = "language-layout";

@autoinject
export class LanguageLayout {
	router: Router;

	constructor(
	) {
	}

	configureRouter(config: RouterConfiguration, router: Router) {
		this.configure(config);
		this.router = router;
	}

	private configure(config: RouterConfiguration) {
		config.map([
			{
				route: ["", "login"],
				name: "login",
				title: "login",
				moduleId: `login`,
				nav: true,
				settings: {}
			}, , {
				route: ["/portal"],
				name: "layout",
				title: "portal",
				moduleId: `layout`,
				nav: true,
				settings: {}
			},
		]);

	}
}