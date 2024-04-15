import Model, { attr } from '@ember-data/model';

export default class LoginModel extends Model {
    @attr('string') username;
    @attr('string') password;
}
