import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomerViewRoute extends Route {
    @service store;

    model(params) {

        const { id } = params;
        

        let result = this.store.peekRecord('customer', id);

        return result;

    }
}
