import Controller from '@ember/controller';

export default Ember.Controller.extend({
  queryParams: ['user','beer','rate'],
  beer: null,
  user: null,
  rate: null,
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    huntBeer: function() {
      var newHunt = this.store.createRecord('hunt', {
        user: this.get('user'),
        beer: this.get('beer'),
        rate: this.get('rate'),
        note: this.get('note'),
        timestamp: new Date().getTime()
      });
      newHunt.save();
    }
  }
});
