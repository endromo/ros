import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class CustomerController extends Controller {
  @tracked username = "user1";
  @tracked pwd = "";

  @action
  customerOn() {
    console.log(this.username);
    alert(this.username.toString());
  }

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }
}
