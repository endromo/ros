import Route from "@ember/routing/route";
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
          username: "user1",
          pwd: "1231",
        },
      ];

      console.log("reqGet customers");
      console.log(customers);

      let tmpOpt = {
        body: JSON.stringify(customers[0])
      }
      let postOpt = Object.assign(tmpOpt, config.fetchOpt);
      postOpt.method = "POST";

      console.log("reqGet postOpt");
      console.log(postOpt);

      this.reqPost(url, postOpt);

      return customers;
    } else {
      return parsed;
    }
  }

  async reqPost(url: string, postOpt:any) {
    let response = await fetch(url, postOpt);

    let parsed = await response.json();
    console.log("reqPost parsed");
    console.log(parsed);

    return parsed;
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
