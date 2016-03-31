import {autoinject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";

const id = "admin-layout";

@autoinject
export class AdminLayout {
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
				route: "",
				name: "admin",
				title: "admin",
				moduleId: `admin-dashboard`,
				nav: true,
				settings: {}
			}, , {
				route: "users",
				name: "users",
				title: "users",
				moduleId: `admin-users`,
				nav: true,
				settings: {}
			},
		]);

	}
}