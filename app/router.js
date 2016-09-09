import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function () {
  this.route('about');
  this.route('artist', {path: '/artist/:artist_name'});
  this.route('404', {
    path: '/*path'
  });
  this.route('epk');
});

export default Router;
