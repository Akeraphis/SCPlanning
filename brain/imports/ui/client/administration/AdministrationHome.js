import React, { Component } from 'react';

export default class AdministrationHome extends Component {
  render(){
    return(
      <div className="component">
        <h2>Administration Panel</h2>
        <a href="/administration/companies">Companies</a><br/>
        <a href="/administration/users">Users</a>
      </div>
    )
  }
}
