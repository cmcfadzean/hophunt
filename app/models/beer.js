import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  brewer: DS.attr('string'),
  type: DS.attr('string'),
  abv: DS.attr('number'),
  city: DS.attr('string'),
  country: DS.attr('string'),
  timestamp: DS.attr('number')
});
