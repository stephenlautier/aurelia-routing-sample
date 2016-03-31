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
				route: ["", "welcome"],
				name: "welcome",
				title: "welcome",
				moduleId: `welcome`,
				nav: true,
				settings: {}
			}, , {
				route: "admin",
				name: "admin-layout",
				title: "admin",
				moduleId: `admin-layout`,
				nav: true,
				settings: {}
			},
		]);

	}
}