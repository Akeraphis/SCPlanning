import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { UsersExtensions } from './users.js';

export const Companies = new Mongo.Collection('companies');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('companies', function companiesPublication() {
    return Companies.find();
  });
  let user = UsersExtensions.findOne({userid : this.userId});
  Meteor.publish('myCompany', function companiesPublication() {
    return Companies.find({name: user.company});
  });
}

Meteor.methods({
  'companies.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Companies.insert({
      name: text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'companies.remove'(cName) {
    check(cName, String);
    Companies.remove(cName);
  },
  'company.dt.insert'(dtid) {
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Companies.update({
      name : Meteor.users.findOne(this.userId).company
    },
    {
      $push : {
        datatables : dtid
      }
    },
    {
      upsert : true
    })
  }
});
