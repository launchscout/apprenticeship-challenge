import React from 'react';

var Row = React.createClass({
  onRemove () {
    this.props.removeItem(this.props.row.sku);
  },

  render: function () {
    return (
      <tr>{Object.keys(this.props.row).map(key =>
         <td key={key}>{this.props.row[key]}</td>
      )}
        <td><button className='button' onClick={this.onRemove}>-</button></td>
      </tr>
    );
  }
});

export default Row;