import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import UserEntity from './UserEntity';

class UsersList extends Component {

  renderCompanies(){
    return this.props.users.map((user) => (
      <UserEntity key={user._id} user={user}/>
    ))
  }

  render() {
    return (
      <div className="container">
        <h2>Users Administration</h2>
        <ul>
          {this.renderCompanies()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('userList');
  return {
    users: Meteor.users.find({}).fetch(),
  };
})(UsersList);
