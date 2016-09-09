import Ember from 'ember';

export default Ember.Route.extend({
  artists: Ember.inject.service(),
  beforeModel() {
    this.get('artists').pushStatic();
  },
  model(params) {
    Ember.Logger.log('params', params);

    return Ember.RSVP.hash({
      artist: this.get('artists').current(params.slug)
    });
  }
});
