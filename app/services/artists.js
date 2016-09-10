import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  current(slug) {
    return new Ember.RSVP.Promise((resolve)=> {
      const artists = this.get('store').peekAll('artist');

      artists.forEach((artist)=> {
        if (artist.get('slug') === slug.toLowerCase()) {
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
          name:       'Ben G',
          email:      'benGhiphop@gmail.com',
          slug:       'beng',
          genre:      'rap',
          banner:     'images/artists/benji/ascentprotein.jpg',
          bio:        'I am a Boston native who moved out to L.A. in pursuit of my passion and dreams of making a name for myself in the music industry. Music has been a huge part of my life ever since I was a child and I was introduced to hip-hop at age 11. I began writing rhymes as early as I can remember and have only progressed since then. Traveling the world and rocking stages is my dream.',
          facebook:   'https://www.facebook.com/Ben-G-Ben-Collotta-496161560575126',
          youtube:    'https://www.youtube.com/channel/UC_0jq1sxg4pw_yDv5Srsb6A',
          instagram:  'https://www.instagram.com/benji02132/',
          soundcloud: 'https://soundcloud.com/bcollotta',
          photos:     [
            {
              href: 'https://www.facebook.com/photo.php?fbid=10156839695890167&set=a.10150292328180167.519958.723890166&type=3&theater',
              src:  'images/artists/benji/balls.jpg'
            },
            {
              href: 'https://www.instagram.com/p/BI8J-k3DEAV/?taken-by=liveraps',
              src:  'images/artists/benji/ascentprotein.jpg'
            },
            {
              href: 'https://www.instagram.com/p/BJHFGfIjRsi/?taken-by=liveraps',
              src:  'images/artists/benji/golf.jpg'
            },
            {
              href: 'https://www.facebook.com/photo.php?fbid=10157271211925167&set=a.10150292328180167.519958.723890166&type=3&theater',
              src:  'images/artists/benji/stage.jpg'
            }
          ],
          soundcloudPlaylist: '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/257915880&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
          youtubePlaylist:    '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLQzNT2AF7HGPi9agJK8-uVHjZxakb_Iwx" frameborder="0" allowfullscreen></iframe>',
          reverbnationShows:  '<div class="widget_iframe" style="display:inline-block;width:100%;height:550px;margin:0;padding:0;border:0;"><iframe class="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_5494985?widget_id=52&amp;posted_by=artist_5494985&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit" width="100%" height="100%" frameborder="0" scrolling="no"></iframe><div class="footer_branding" style="margin-top:-5px;font-size:10px;font-family:Arial;"><center><a href="https://www.reverbnation.com/band-promotion/fanreach?utm_campaign=a_features_fanreach&utm_medium=widget&utm_source=HTML5_Show_Schedule&utm_content=widgetfooter_Email newsletters for bands at ReverbNation.com" target="_blank" style="text-decoration:none;color:#444;">Email newsletters for bands at ReverbNation.com</a></center></div></div>'

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
