import React from 'react'

export default class Item extends React.Component {

  renderDelete = () => {
    return <button className="delete" onClick={this.props.onDelete}>x</button>
  }

  render () {
    const { populateForm, onDelete, ...props } = this.props
    return (
      <span>
        <li>SKU: {this.props.sku}</li>  
        <li>ITEM: {this.props.text}</li>
        <li>PRICE: {this.props.price}</li>
        <button onClick={this.props.populateForm}>Edit Item</button>
        { onDelete && this.renderDelete() }
      </span>
    )
  }
}
