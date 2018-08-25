import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// Company class represents the list of companies in the model

class UsersList extends Component {

  renderCompanies(){
    return this.props.users.map((user) => (
      <li><a href="/administration/user/">{user.emails[0].address}</a></li>
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
