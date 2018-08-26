import React, { Component } from 'react';

export default class TableSummaryCard extends Component{

  render(){
    return(
      <div className="container">
        <h5>{this.props.dt.name}</h5>
      </div>
    )
  }
}
