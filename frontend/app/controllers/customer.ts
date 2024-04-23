import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class Customer extends Controller.extend({}) {
  @service session: any;
  @tracked username = "";
  @tracked pwd = "";

  @action
  customerOn() {
    this.session
      .login(this.username, this.pwd)
      .then(() => {
        this.transitionToRoute("home");
        alert("ok login");
      })
      .catch((reason: any) => {
        console.log("Error: ", reason);
        alert("error:" + reason);
      });
  }

  @action
  updateUsername(event: any) {
    this.username = event.target.value;
  }
}

declare module "@ember/controller" {
  interface Registry {
    customer: Customer;
  }
}
