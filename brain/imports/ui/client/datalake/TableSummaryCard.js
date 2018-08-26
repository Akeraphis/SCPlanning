import React, { Component } from 'react';

export default class TableSummaryCard extends Component{

  displayTable(){
    if(!this.props.company.dataTables || this.props.company.dataTables.length == 0){
      return(<label>no data tables</label>)
    }
    else{
      return(<label>list</label>)
    }
  }

  render(){
    return(
      <div className="container">
        <h5>{this.props.company.name}</h5>
        {this.displayTable()}
      </div>
    )
  }
}
