import { Meteor } from 'meteor/meteor';
import { ExportsCollection } from './exports';

Meteor.methods({
  // Insert a new export and return the id
  async 'exports.insert'() {
    const id = await ExportsCollection.insertAsync({
      url: 'Export en cours',
      progress: 0,
      status: 'PENDING',
      createdAt: new Date(),
    });

    return id;
  },

  // Update data
  async 'exports.setData'(id, data) {
    await ExportsCollection.updateAsync(id, {
      $set: data,
    });
  },

  // Update data
  async 'exports.remove'(id) {
    await ExportsCollection.removeAsync(id);
  },
});
