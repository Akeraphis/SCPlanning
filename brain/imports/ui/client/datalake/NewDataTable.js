import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class NewDataTable extends Component{

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('datatable.insert', name, function(err, res){
      if(!err){
        Meteor.call('company.dt.insert', res);
      }
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render(){
    return(
      <div className="container">
        <Link to='/dataLake'><span>Back</span></Link>
        <form className="new-datatable" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="textInput"
            placeholder="Datatable name"
          />
          <button type="submit">
             Create
          </button>
        </form>
      </div>
    )
  }
}
