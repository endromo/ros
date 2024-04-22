import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class Customer extends Controller.extend({}) {
  @tracked username = "";
  @tracked pwd = "";

  @action
  customerOn() {
    console.log(this.username);
    alert(this.username.toString());
    this.transitionToRoute("customer.show", this.username);
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
