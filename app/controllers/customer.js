import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CustomerController extends Controller {

    @action
    customerOn() {
        alert('customerOn');
    }
}
