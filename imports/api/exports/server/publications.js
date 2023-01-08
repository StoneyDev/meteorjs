import { Meteor } from 'meteor/meteor';

import { ExportsCollection } from '../exports';

Meteor.publish('exports', function publishExports() {
  return ExportsCollection.find({});
});
