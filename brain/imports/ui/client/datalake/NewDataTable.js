import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewDataTable extends Component{

  handleSubmit(event) {
    event.preventDefault();
    console.log("fired event")

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    let dt = Meteor.call('datatable.insert', name);
    Meteor.call('company.dt.insert', dt._id);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render(){
    return(
      <div className="container">
        <Link to='/dataLake'><span>Back</span></Link>
        <form className="new-datatable" >
          <input
            type="text"
            ref="textInput"
            placeholder="Datatable name"
          />
          <button onSubmit={this.handleSubmit.bind(this)}>
             Create
          </button>
        </form>
      </div>
    )
  }
}
