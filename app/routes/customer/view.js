import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomerViewRoute extends Route {
    @service store;

    model({id}) {

        let result = this.store.peekRecord('customer', id);

        return result;

    }
}
