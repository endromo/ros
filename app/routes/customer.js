import Route from '@ember/routing/route';

export default class CustomerRoute extends Route {
    model() {
        // let result = [{
        //     id: 1,
        //     username: 'Endro',
        //     pwd: '123'
        // }];
        
        let result = this.store.findAll('customer');

        return result;

    }
}
