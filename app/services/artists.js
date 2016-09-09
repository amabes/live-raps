import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  current(slug) {
    return new Ember.RSVP.Promise((resolve)=> {
      const artists = this.get('store').peekAll('artist');

      artists.forEach((artist)=> {
        if (artist.get('slug') === slug) {
          Ember.Logger.log(artist);
          resolve(artist);
        }
      });
    });
  },
  pushStatic() {
    /* eslint-disable max-len */
    this.get('store').push({
      data: [{
        id:         1,
        type:       'artist',
        attributes: {
          name:       'Benji',
          slug:       'benji',
          genre:      'rap',
          banner:     'images/artists/benji.jpg',
          scPlaylist: '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/257566199&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
          bio:        'I am a Boston native who moved out to L.A. in pursuit of my passion and dreams of making a name for myself in the music industry. Music has been a huge part of my life ever since I was a child and I was introduced to hip-hop at age 11. I began writing rhymes as early as I can remember and have only progressed since then. Traveling the world and rocking stages is my dream.',
          facebook:   'https://www.facebook.com/Ben-G-Ben-Collotta-496161560575126',
          youtube:    'https://www.youtube.com/channel/UC_0jq1sxg4pw_yDv5Srsb6A',
          instagram:  'https://www.instagram.com/benji02132/',
          soundcloud: 'https://soundcloud.com/bcollotta',
          images:     [
            'images/artists/benji/ascentprotein.jpg',
            'images/artists/benji/golf.jpg',
            ''
          ]
          // twitter:      'https://twitter.com/Bsmooth617',
          // spotify:      'https://open.spotify.com/artist/6N1xia8s2Npb5BMk4GOzqa',
          // itunes:       'https://itunes.apple.com/us/album/world-on-fire/id871185131',
          // tumblr:       'http://28north.tumblr.com/',
          // reverbnation: 'http://www.reverbnation.com/28North',
        },
        relationships: {}
      }, {
        id:         2,
        type:       'artist',
        attributes: {
          name:  'Blizzy Wru',
          slug:  'blizzy',
          genre: 'rap'
        },
        relationships: {}
      }]
    });
    /* eslint-enable max-len */
  }
});
