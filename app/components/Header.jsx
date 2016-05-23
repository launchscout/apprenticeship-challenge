import React from 'react';

var Header = React.createClass({
  render () {
    return(
      <thead>
        <tr>{Object.keys(this.props.row).map(key =>
            <th key={key}>{key}</th>
          )}
        </tr>
      </thead>
    );
  }
});

export default Header;
