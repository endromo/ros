import Route from "@ember/routing/route";

export default class CustomerRoute extends Route {
  async reqGet(url: string) {
    let response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    let parsed = await response.json();
    console.log("reqGet parsed");
    console.log(parsed);

    return parsed;
  }

  async model() {
    let loopBackURL = "http://localhost:3000";
    let parsed = this.reqGet(loopBackURL + "/api/customers");

    // let customers = [
    //   {
    //     type: "customers",
    //     id: "1",
    //     attributes: {
    //       username: "user1",
    //       pwd: "1231",
    //     },
    //   },
    //   {
    //     type: "customers",
    //     id: "2",
    //     attributes: {
    //       username: "user2",
    //       pwd: "1232",
    //     },
    //   },
    // ];

    return parsed;
  }
}
