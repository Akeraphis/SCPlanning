import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Companies } from '../../../api/companies.js';
import { DataTables } from '../../../api/datatables.js';
import TableSummaryCard from './TableSummaryCard';

class DataLakeHome extends Component {

  displayTablesList(){
    return this.props.datatables.map((dt) => (
      <TableSummaryCard key = {dt._id} dt = {dt} />
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
    datatables : DataTables.find({}).fetch()
  };
})(DataLakeHome);
