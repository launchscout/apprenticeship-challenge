import React from 'react'

export default class Item extends React.Component {
  render () {
    const { populateForm, onDelete, ...props } = this.props
    return (
      <span>
        <li>SKU: {this.props.sku}</li>  
        <li>ITEM: {this.props.text}</li>
        <li>PRICE: ${this.props.price}</li>
        <button className="edit" onClick={this.props.populateForm}>edit</button>
        <button className="delete" onClick={this.props.onDelete}>x</button>
      </span>
    )
  }
}
