import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  message: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),

  // favoritesList: Ember.inject.service(),
  // inFavorites: Ember.computed('favoritesList.questions.[]', function() {
  //   return this.get('favoritesList').includes(this);
  // })
});
