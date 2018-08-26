import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Companies } from '../../../../api/companies.js';

export default class CompanyCreationForm extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('companies.insert', name);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render(){
    return (
      <div className="container">
        <form className="new-company" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Company name"
          />
        </form>
      </div>
    );
  }
}
