import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Companies } from '../../../api/companies.js';
import TableSummaryCard from './TableSummaryCard';

class DataLakeHome extends Component {

  displayTablesList(){
    return this.props.companies.map((company) => (
      <TableSummaryCard key = {company._id} company = {company} />
    ));
  }

  render() {
    return (
      <div className="container">
        <h3>Data Lake</h3>
        <Link to='/dataLake/newTable'>Create New Table</Link><br/>
        {this.displayTablesList()}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('myCompany');
  Meteor.subscribe('myUser');
  Meteor.subscribe('allTables');
  return {
    companies: Companies.find({}).fetch(),
  };
})(DataLakeHome);
