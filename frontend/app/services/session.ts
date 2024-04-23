import Service from "@ember/service";
import { inject as service } from '@ember/service';

export default class Session extends Service.extend({}) {
  currentUser: any;
  isLoggedIn: boolean = false;
  @service cookies: any;

  login(userName: string, pwd: string){
    return new Promise((resolve, reject)=>{
      if(userName == 'user1' && pwd == '1231'){
        this.cookies.write('user', userName);
        alert("set coocies: " + userName);
        resolve("ok");
      } else {
        reject('Username and password did not match');
        alert("reject coocies");
      }
    })
  }

  isLogin(){
    let isExists = this.cookies.exists('user');
    console.log("isExists");
    console.log(isExists);
    return isExists;
  }

  userName(){
    let userName = this.cookies.read("user");
    console.log("userName");
    console.log(userName);

    return userName;
  }

  setLogout(){
    this.cookies.clear('user');
    console.log("Session setLogout");
    location.reload();
    return true;
  }
}

