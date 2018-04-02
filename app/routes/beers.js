import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Route.extend(FindQuery,{
  model: function() {
    return RSVP.hash({
      beers: this.get('store').findAll('beer'),
      hunts: this.get('store').findAll('hunt')
    });
  }
});
