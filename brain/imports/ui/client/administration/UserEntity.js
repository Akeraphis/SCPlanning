import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import UserEdition from './UserEdition';

export default class UserEntity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelected: false
    };
    this.handler = this.handler.bind(this);
  }

  handler(){
    this.setState({
      userSelected : !this.state.userSelected
    })
  }

  renderUserEdition(){
    if(this.state.userSelected){
      return(
        <UserEdition user={this.props.user} />
      )
    }
  }

  render(){
    return(
      <div className="container">
        <li onClick={this.handler.bind(this)}>{this.props.user.emails ? this.props.user.emails[0].address : this.props.user._id}</li>
        {this.renderUserEdition()}
      </div>
    )
  }
}
