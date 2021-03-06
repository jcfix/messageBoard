import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
    console.log(this.get('questions'));
  },
  remove(question) {
    this.get('questions').removeObject(question);
  },
  includes(question) {
    return this.get('questions').includes(question);
  },
  empty() {
    this.get('questions').setObjects([]);
  }
});
