import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(params) {
    Ember.Logger.log(params);
  }
});
