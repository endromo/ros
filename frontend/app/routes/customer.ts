import Route from "@ember/routing/route";
import config from "ros/config/environment";

export default class CustomerRoute extends Route {
  async reqGet(url: string) {
    let response = await fetch(url, config.fetchOpt);

    let parsed = await response.json();
    console.log("reqGet parsed");
    console.log(parsed);

    return parsed;
  }

  async model() {
    let parsed = this.reqGet(config.loopBackURL + "/api/customers");

    return parsed;
  }
}
