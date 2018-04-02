import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  beer: DS.belongsTo('beer'),
  rate: DS.attr('number'),
  note: DS.attr('string'),
  timestamp: DS.attr('number')
});
