import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  itunesUrl: DS.attr('string'),
  genre:     DS.attr('string')
});
