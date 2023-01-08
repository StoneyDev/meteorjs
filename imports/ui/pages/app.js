import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import '../pages/list-container/list-container-page';
import './app.html';

Template.Action.events({
  async 'click button'() {
    let progress = 0;

    // Insert an export into the collection and get id
    const id = await Meteor.callAsync('exports.insert');

    const progressInterval = Meteor.setInterval(async () => {
      if (progress === 100) {
        // Clear interval when complete
        clearInterval(progressInterval);

        // Update and set random url
        await Meteor.callAsync('exports.setData', id, { url: getRandomUrl(), status: 'DONE' });

        return;
      }

      progress += 5;

      // Update progress
      await Meteor.callAsync('exports.setData', id, { progress });
    }, 1000);
  },
});

/**
 * Return random url string
 */
const getRandomUrl = () => {
  const urls = [
    'https://www.lempire.com/',
    'https://www.lemlist.com/',
    'https://www.lemverse.com/',
    'https://www.lemstash.com/',
  ];

  return urls[Math.floor(Math.random() * urls.length)];
};
