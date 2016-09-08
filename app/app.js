import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix:    config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Route.reopen({
  toCssClass: function () {
    return this.routeName.replace(/\./g, '-').dasherize();
  },
  changeCssClass: function () {
    const cssClass = this.toCssClass();

    // if (cssClass !== 'application') {
    Ember.$('body, html').attr('route', cssClass);
    // }
  }.on('activate'),
  removeCssClass: function () {
    // Ember.$('body').removeAttr('route');
  }.on('deactivate')
});

export default App;
