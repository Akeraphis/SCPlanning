import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UserInformations = new Mongo.Collection('userInformations');

if (Meteor.isServer) {
  Meteor.publish('userList', function (){
    return Meteor.users.find({});
  });
  Meteor.publish('userInfo', function (){
    return UserInformations.find({});
  });
}

Meteor.methods({
  'user.update'(id, name) {
    check(name, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    UserInformations.update(
      {
        userId: id
      },
      {
        userId: id,
        username: name
      },
      {
        upsert: true
      }
    );
  }
});
