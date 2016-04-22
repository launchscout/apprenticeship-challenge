import React from 'react'

export default class Item extends React.Component {
  render () {
    const { populateForm, onDelete, ...props } = this.props
    return (
      <span>
        <li className="item">SKU: {this.props.sku}</li>  
        <li className="item">ITEM: {this.props.text}</li>
        <li className="item">PRICE: ${this.props.price}</li>
        <button className="btn edit-item" onClick={this.props.populateForm}>edit</button>
        <button className="btn delete-item" onClick={this.props.onDelete}>delete</button>
        <hr className='hr'/>
      </span>
    )
  }
}
