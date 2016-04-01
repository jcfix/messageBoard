import Ember from 'ember';


export default Ember.Component.extend({
 addNewQuestion: false,
 actions: {
    questionFormShow() {
    this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
         book: this.get('book') ? this.get('book'): "",
         question: this.get('question') ? this.get('question'): "",
         author: this.get('author') ? this.get('author'): "",
         message: this.get('message') ? this.get('message'): "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
