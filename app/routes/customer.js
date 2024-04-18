import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CustomerRoute extends Route {
    @service store;

    
    model() {
        // let result = [{
        //     id: 1,
        //     username: 'Endro',
        //     pwd: '123'
        // }];

        let result = this.store.findAll('customer');

        // let result = this.store.query('customer',
        //     {
        //         filter: {
        //             pwd: '1231'
        //         }
        //     }
        // ).then(function (users) {
        //     return users.get('firstObject');
        // });

        return result;

    }
}
