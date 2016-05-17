import React from 'react';

var Header = React.createClass({
  render () {
    return(
      <thead>
        <tr>
          <th>Item</th>
          <th>Sku</th>
          <th>Price</th>
        </tr>
      </thead>
    );
  }
});

export default Header;
