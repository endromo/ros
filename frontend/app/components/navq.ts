import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import type computed from "@ember/object/computed";
import { action } from "@ember/object";
import Ember from "ember";

//  Created By: Endro
//  Email: endro.mono9@gmail.com
//  Created At: 2024-04-12

interface NavqArgs {}

export default class Navq extends Component<NavqArgs> {
  @service session: any;

  get getIsLogin() {
    let isLogin = this.session.isLogin();
    console.log("isLogin");
    console.log(isLogin);
    return isLogin;
  }

  get getUserName() {
    let userName = this.session.userName();
    console.log("userName");
    console.log(userName);
    return userName;
  }

  @action
  getLogOut() {
    if (confirm("Are you sure you want to logout?")) {
      alert("logout");
      this.session.setLogout();      
      location.reload();
      return true;
    } else {
      console.log("calcel logout");
      return false;
    }
  }

}
