import Route from "@ember/routing/route";
import config from "ros/config/environment";

export default class CustomerShowRoute extends Route {
  async reqGet(url: string) {
    let response = await fetch(url, config.fetchOpt);

    let parsed = await response.json();
    console.log("reqGet parsed");
    console.log(parsed);

    return parsed;
  }

  async model(params: any) {
    const { username } = params;

    console.log("username");
    console.log(username);

    let filterObj = { where: { username: username } };
    let strf = JSON.stringify(filterObj);
    
    let parsedDb = this.reqGet(
      config.loopBackURL + "/api/customers?filter=" + encodeURIComponent(strf)
    );
    
    console.log("parsedDb");
    console.log(parsedDb);

    return parsedDb;
  }
}
