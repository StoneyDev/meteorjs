import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './export-row.html';

Template.Export_row.helpers({
  complete(value) {
    return value === 'DONE';
  },
});

Template.Export_row.events({
  async 'click .delete'() {
    // Remove one export row
    await Meteor.callAsync('exports.remove', this._id);
  },
});
