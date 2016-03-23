import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome Robert",
    }
  }

  render() {
    setTimeout(() => {
      this.setState({title: "I mean Will..."});
    }, 2000);

    return (
        <div>
          <Header title={this.state.title} />
          <Header title={"Other title"} />
          <Body />
          <Footer />
        </div>
    );
  }
}
