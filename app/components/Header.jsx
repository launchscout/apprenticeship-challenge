import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {

  render() {
    return (
        <Title title={this.props.title} />
    );
  }
}
