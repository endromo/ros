import Route from "@ember/routing/route";
import config from "ros/config/environment";

//  Created By: Endro
//  Email: endro.mono9@gmail.com
//  Created At: 2024-04-12

export default class CustomerRoute extends Route {
  async reqGet(url: string) {
    let response = await fetch(url).catch((reason: any) => {
      alert("error: Please check loopback3 connection");
    });

    let parsed = await response?.json();

    console.log("reqGet parsed");
    console.log(parsed);

    let customers = [
      {
        username: "user1",
        pwd: "1231",
      },
    ];

    console.log("reqGet customers");
    console.log(customers);

    return customers;
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
