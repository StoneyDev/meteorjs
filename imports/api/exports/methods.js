import { Meteor } from 'meteor/meteor';
import { ExportsCollection } from './exports';

Meteor.methods({
  // Insert a new export and return the id
  async 'exports.insert'() {
    const id = await ExportsCollection.insertAsync({
      url: 'Export en cours',
      progress: 0,
      createdAt: new Date(),
    });

    return id;
  },

  // Update url field
  async 'exports.setUrl'(id, url) {
    await ExportsCollection.updateAsync(id, {
      $set: { url },
    });
  },

  // Update progress field
  async 'exports.setProgress'(id, progress) {
    await ExportsCollection.updateAsync(id, {
      $set: { progress },
    });
  },
});
