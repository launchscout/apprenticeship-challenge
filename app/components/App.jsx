import React from 'react';
import Note from './Note.jsx';

export default class App extends React.Component {
  getVal() {
    return "Will";
  }

  render() {
    return (
        <h1>Its working, {this.getVal()}!</h1>
    );
  }
}
