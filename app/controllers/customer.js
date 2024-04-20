import Controller from "@ember/controller";
import Route from '@ember/routing/route';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
// import service from '@ember/service';
import { inject as service } from '@ember/service';


export default class CustomerController extends Controller {
  @service router;
  @tracked username = "user1";
  @tracked pwd = "";

  @action
  customerOn() {
    console.log(this.username);
    alert(this.username.toString());
    this.router.transitionTo("customer.show", this.username);
    // this.router.transitionTo("customer", this.username);
  }

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }
}
