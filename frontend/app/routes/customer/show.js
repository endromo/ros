import Route from "@ember/routing/route";

export default class CustomerShowRoute extends Route {
    async model(params) {
    const { username } = params;

    console.log(username);

    console.log("===");

    let response = await fetch('/api/customers/' + username);

    let parsed = await response.json();

    console.log(parsed);

    console.log("===");

    console.log(parsed.data);

    return parsed;
  }
}
