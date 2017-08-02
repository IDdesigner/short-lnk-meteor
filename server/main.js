import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links } from '../imports/api/links';

import '../imports/startup/simple-schema-configuration.js';

// These imports are from beforing refactoring to users.js
// import SimpleSchema from 'simpl-schema';
// import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup

  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisits', _id);
    } else {
      next();
    }

  });

  // This was an example of using SimpleSchema (aka simpl-schema)
  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });

  // petSchema.validate({
  //   name: 'Andrew',
  //   age: 10,
  //   contactNumber: '4152225555'
  // });

});
