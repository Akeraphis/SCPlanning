import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserCompanyDropDown from './UserCompanyDropDown'

export default class UserEdition extends Component {
  constructor(props){
    super(props);
    this.state={
      name: props.user.username,
      company: props.user.company
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
  }

  handleChangeName(event){
    event.preventDefault();
    this.setState({
      name : event.target.value
    })
  }

  handleChangeCompany(event){
    event.preventDefault();
    this.setState({
      company : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('user.update', this.props.user._id, this.state.name, this.state.company);
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
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <UserCompanyDropDown userCompany={this.state.company} handleChangeCompany = {this.handleChangeCompany}/>
          <button onClick={this.handleSubmit.bind(this)}>Submit changes</button>
        </form>
      </div>
    )
  }
}
