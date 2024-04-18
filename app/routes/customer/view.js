import Route from '@ember/routing/route';

export default class CustomerViewRoute extends Route {
    model({id}) {

        let result = this.store.peekRecord('customer', id);

        return result;

    }
}
