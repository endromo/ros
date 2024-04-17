import Model, { attr } from '@ember-data/model';

export default class CustomerModel extends Model {
    @attr('string') username;
    @attr('string') pwd;
}
