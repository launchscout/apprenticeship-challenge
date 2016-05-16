// import React from 'react';

// export default (props) => <div>{props.item}<br/> SKU: {props.sku}<br/> ${props.price}</div>;

import React from 'react'
import App from './App.jsx'

// three pieces of info passed in:
//   - item
//   - sku
//   - price
var Row = React.createClass({
  render: function () {
    return (
      <li>{this.props.item}<br/>
      SKU: {this.props.sku}<br/>
      ${this.props.price.toFixed(2)}
      <button onClick={this.removeItem}>-</button>
      </li>
    )
  }
})


export default Row

// When using: <Row item='beef jerky' sku='123' price='2.00' />


