import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function () {
  this.route('about');
  this.route('artist', {path: '/:slug'});
  this.route('epk');
  this.route('success');
  this.route('confirm');
  this.route('404', {
    path: '/*path'
  });
});

export default Router;
