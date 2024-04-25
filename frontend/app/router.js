//  Created By: Endro 
//  Email: endro.mono9@gmail.com 
//  Created At: 2024-04-12 

import EmberRouter from '@ember/routing/router';
import config from 'ros/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('customer', function() {
    this.route('show', {path: '/show/:username'});
  });
  this.route('contact');
  this.route('cart');
  this.route('item', {path: '/item/:id'});
});
