import DS from 'ember-data';

export default DS.Model.extend({
  slug:   DS.attr('string'),
  name:   DS.attr('string'),
  email:  DS.attr('string'),
  genre:  DS.attr('string'),
  banner: DS.attr('string'),

  // Apps
  itunesApp: DS.attr('string'),
  googleApp: DS.attr('string'),

  // Social
  facebook:     DS.attr('string'),
  spotify:      DS.attr('string'),
  twitter:      DS.attr('string'),
  itunes:       DS.attr('string'),
  tumblr:       DS.attr('string'),
  soundcloud:   DS.attr('string'),
  pandora:      DS.attr('string'),
  instagram:    DS.attr('string'),
  reverbnation: DS.attr('string'),
  photos:       DS.attr(''),

  // Widgets
  soundcloudPlaylist: DS.attr('string'),
  youtubePlaylist:    DS.attr('string'),
  reverbnationShows:  DS.attr('string')
});
