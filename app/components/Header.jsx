import React from 'react';

var Header = React.createClass({
  render () {
    return(
      <thead>
        <tr>{Object.keys(this.props.list[0]).map(key =>
            <th>{key}</th>
          )}
        </tr>
      </thead>
    );
  }
});

export default Header;
