import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { UserInformations } from '../../../api/users.js';

class UserEdition extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const name = ReactDOM.findDOMNode(this.refs.nameUser).value.trim();

    Meteor.call('user.update', this.props.user._id, name);
    ReactDOM.findDOMNode(this.refs.nameUser).value = '';
  }

  render(){
    return(
      <div className="container">
        <form className="editUser">
          <input
            type="text"
            ref="nameUser"
            placeholder="User name"
          />
          <button onClick={this.handleSubmit.bind(this)}>Submit changes</button>
        </form>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('userInfo');
  return {
    userInfo: UserInformations.find({}).fetch(),
  };
})(UserEdition);
