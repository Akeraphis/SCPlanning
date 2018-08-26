import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { UsersExtensions } from './users.js';
import { Companies } from './companies.js'

export const DataTables = new Mongo.Collection('datatables');

if (Meteor.isServer) {
  // This code only runs on the server
  let user = UsersExtensions.findOne({userid : this.userId});
  Meteor.publish('mydatatables', function dtPublication() {
    return DataTables.find({company : user.company});
  });
  Meteor.publish('allTables', function dtspub(){
    return DataTables.find({});
  });
}

Meteor.methods({
  'datatable.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return DataTables.insert({
      name: text,
      createdAt: new Date(),
      owner: this.userId,
    });

  }
});
