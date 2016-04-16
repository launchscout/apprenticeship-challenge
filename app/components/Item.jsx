import React from 'react'

export default class Item extends React.Component {
  render () {
    const { ...props } = this.props

    console.log(props)
    return (
    <span>
      <li>SKU: {this.props.sku}</li>  
      <li>ITEM: {this.props.text}</li>
      <li>PRICE: {this.props.price}</li>
      <button>Edit Item</button>
    </span>
    )
  }
}
