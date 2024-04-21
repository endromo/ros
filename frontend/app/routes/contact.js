//  Created By: Endro 
//  Email: endro.mono9@gmail.com 
//  Created At: 2024-04-12 

import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
    model() {
        let result = [{
            id: 1,
            name: 'Endro',
            email: 'endro.mono9@gmail.com'
        }];

        return result;

    }
}
