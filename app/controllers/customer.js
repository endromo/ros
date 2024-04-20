import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CustomerController extends Controller {
    username = 'ssdfsd';
    password = '';
    @action
    customerOn() {
        let userName = this.getProperties('username');
        let password = this.getProperties('password');
        console.log(userName);
        alert(userName.toString());
    }
}
