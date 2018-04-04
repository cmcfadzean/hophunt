import Controller from '@ember/controller';

export default Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: true, // sorts post by timestamp
  actions: {
    publishBeer: function() {
      var newBeer = this.store.createRecord('beer', {
        name: this.get('name'),
        brewer: this.get('brewer'),
        type: this.get('type'),
        abv: this.get('abv'),
        city: this.get('city'),
        country: this.get('country'),
        timestamp: new Date().getTime()
      });
      newBeer.save();
    }
  }
});
