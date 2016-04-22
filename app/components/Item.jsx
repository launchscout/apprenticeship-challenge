import React from 'react'

export default class Item extends React.Component {
  render () {
    const { populateForm, onDelete, onCheck, ...props } = this.props
    const checkItem = this.props.checked ? 'item checked' : 'item'

    return (
      <span>
        <div onClick={onCheck}>
          <li className={checkItem}>SKU: {this.props.sku}</li>  
          <li className={checkItem}>ITEM: {this.props.text}</li>
          <li className={checkItem}>PRICE: ${this.props.price}</li>
          <button className="btn edit-item" onClick={this.props.populateForm}>edit</button>
          <button className="btn delete-item" onClick={this.props.onDelete}>delete</button>
          <hr className='hr'/>
        </div>
      </span>
    )
  }
}
