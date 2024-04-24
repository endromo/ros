import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

//  Created By: Endro
//  Email: endro.mono9@gmail.com
//  Created At: 2024-04-12

export default class Customer extends Controller.extend({}) {
  @service session: any;
  @tracked username = "";
  @tracked pwd = "";

  @action
  customerOn() {
    alert(" username: " + this.username + "\n pwd: " + this.pwd);
    
    this.session
      .login(this.username, this.pwd)
      .then(() => {
        this.transitionToRoute("index");
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
