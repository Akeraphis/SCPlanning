import React, { Component } from 'react';

import AccountsUIWrapper from '../standardComponents/AccountsUIWrapper.js';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>brAIn</h1>
        </header>
        <AccountsUIWrapper/><br />
        <a href="/administration">Administration</a><br/>
      </div>
    );
  }
}
