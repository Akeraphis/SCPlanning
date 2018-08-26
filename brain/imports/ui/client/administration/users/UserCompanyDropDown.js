import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Companies } from '../../../../api/companies.js';

class UserCompanyDropDown extends Component {

  renderCompanies(){
    return this.props.companies.map((c) => (
      <option id={c._id}>{c.name}</option>
    ))
  }

  render() {
    return (
      <select ref="companyUser" placeholder="User Company" onChange={this.props.handleChangeCompany} value={this.props.userCompany}>
        {this.renderCompanies()}
      </select>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('companies');
  return {
    companies: Companies.find({}).fetch(),
  };
})(UserCompanyDropDown);
