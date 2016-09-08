import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('about');
  this.route('artist', {path: '/artist/:artist_name'});
  this.route('404', {
    path: '/*path'
  });
});

export default Router;
