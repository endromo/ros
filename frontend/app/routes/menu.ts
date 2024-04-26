import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

//  Created By: Endro
//  Email: endro.mono9@gmail.com

export default class Menu extends Route.extend({}) {
  @service session: any;

  model() {
    let isLogin = this.session.isLogin();
    console.log("isLogin");
    console.log(isLogin);
    let userName = this.session.userName();
    console.log("userName");
    console.log(userName);

    let result = {
      isLogin: isLogin,
      userName: userName,
    };

    return result;
  }
}
