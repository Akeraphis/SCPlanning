import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Companies } from '../../../../api/companies.js';
import CompanyCreationForm from './CompanyCreationForm';

// Company class represents the list of companies in the model

class CompaniesList extends Component {

  renderCompanies(){
    return this.props.companies.map((c) => (
      <li>{c.name}</li>
    ))
  }

  render() {
    return (
      <div className="container">
        <h2>Companies Administration</h2>
        <CompanyCreationForm />
        <ul>
          {this.renderCompanies()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('companies');
  return {
    companies: Companies.find({}).fetch(),
  };
})(CompaniesList);
