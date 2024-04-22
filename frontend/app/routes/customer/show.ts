import Route from "@ember/routing/route";

export default class CustomerShowRoute extends Route {
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

  async model(params: any) {
    const { username } = params;

    console.log("username");
    console.log(username);

    let loopBackURL = "http://localhost:3000";

    let filterObj = { where: { username: username } };
    console.log("strf");

    let strf = JSON.stringify(filterObj);
    console.log(strf);

    let parsedDb = this.reqGet(
      loopBackURL + "/api/customers?filter=" + encodeURIComponent(strf)
    );
    console.log("uri");
    console.log(
      loopBackURL + "/api/customers?filter=" + encodeURIComponent(strf)
    );
    console.log("parsedDb");
    console.log(parsedDb);
    return parsedDb;
  }
}
