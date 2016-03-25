import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    }
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <Body />
          <Footer />
        </div>
    );
  }
}
