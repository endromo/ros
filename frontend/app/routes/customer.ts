import { isArray } from "@ember/array";
import Route from "@ember/routing/route";
import { isEmpty, isNone } from "@ember/utils";
import config from "ros/config/environment";

export default class CustomerRoute extends Route {
  async reqGet(url: string) {
    let response = await fetch(url, config.fetchOpt);

    let parsed = await response.json();

    console.log("reqGet parsed");
    console.log(parsed);

    if (parsed.length == 0) {
      console.log("reqGet parsed.length");
      console.log(parsed.length);

      let customers = [
        {
          id: "1",
          username: "user1",
          pwd: "1231",
        },
        {
          id: "2",
          username: "user2",
          pwd: "1232",
        },
      ];

      console.log("reqGet customers");
      console.log(customers);

      return customers;
    } else {
      return parsed;
    }
  }

  async model() {
    console.log("url model");
    console.log(config.loopBackURL + "/api/customers");

    let promise = this.reqGet(config.loopBackURL + "/api/customers");

    console.log("reqGet model promise");
    console.log(promise);

    return promise;
  }
}
