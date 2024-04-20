import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class CustomerRoute extends Route {
  @service store;

  model() {
    let result = this.store.findAll("customer");

    return result;
  }
}
