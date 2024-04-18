import Route from '@ember/routing/route';

export default class CustomerShowRoute extends Route {
    model({ username }) {

        let result = this.store.query('customer',
            {
                username: 'user2'
            }
        );

        return result;

    }
}
