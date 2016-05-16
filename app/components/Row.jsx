import React from 'react'

var Row = React.createClass({
  onRemove () {
    this.props.removeItem(this.props.sku)
  },

  render: function () {
    return (
      <li>{this.props.item}<br/>
           SKU: {this.props.sku}<br/>
           ${this.props.price && this.props.price.toFixed(2)}
           <button className='button' onClick={this.onRemove}>-</button>
      </li>
    )
  }
})

export default Row