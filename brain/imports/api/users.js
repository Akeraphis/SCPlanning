import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UsersExtensions = new Mongo.Collection('usersExtensions');

if (Meteor.isServer) {
  Meteor.publish('userList', function (){
    return Meteor.users.find({});
  })
  Meteor.publish('myUser', function (){
    return UsersExtensions.find({userid : this.userId});
  })
}

Meteor.methods({
  'user.update'(id, name, company) {
    check(name, String);
    check(company, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Meteor.users.update(id,
      {
        $set: {
          username: name,
          company: company
        }
      }
    );

    UsersExtensions.update(
      {
        userid: id
      },
      {
        $set: {
          username: name,
          company: company
        }
      },
      {
        upsert: true
      }
    );
  }
});
