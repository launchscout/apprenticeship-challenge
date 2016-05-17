import React from 'react';

var Row = React.createClass({
  onRemove () {
    this.props.removeItem(this.props.sku);
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.item}</td>
        <td>{this.props.sku}</td>
        <td>${this.props.price && this.props.price.toFixed(2)}</td>
        <td><button className='button' onClick={this.onRemove}>-</button></td>
      </tr>
    );
  }
});

export default Row;