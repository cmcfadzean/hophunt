import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    return RSVP.hash({
      searchedBeers: this.store.query('beer', {orderBy: 'name', equalTo: params.search}),
      allBeers: this.store.findAll('beer')
    });
  }
});
