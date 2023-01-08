import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { ExportsCollection } from '../../../api/exports/exports';
import '../../components/export-row/export-row';
import './list-container-page.html';

const IS_LOADING = 'isLoading';

Template.List_container_page.onCreated(function listContainerPageOnCreated() {
  this.state = new ReactiveDict();

  const exportsHandler = Meteor.subscribe('exports');

  // Notifies the view when data is loaded
  Tracker.autorun(() => {
    this.state.set(IS_LOADING, !exportsHandler.ready());
  });
});

Template.List_container_page.helpers({
  exports() {
    return ExportsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  },
  isLoading() {
    return Template.instance().state.get(IS_LOADING);
  },
});
