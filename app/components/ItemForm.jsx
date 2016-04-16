import React from 'react'
import uuid from 'node-uuid'

class ItemForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
  }

  handleItemSku = (e) => { this.setState({sku: e.target.value}) }
  handleItemText = (e) => { this.setState({text: e.target.value}) }
  handleItemPrice = (e) => { this.setState({price: e.target.value}) }

  handleSubmit = (event) => {
    event.preventDefault()

    let sku = this.refs.sku.value
    let text = this.refs.text.value
    let price = this.refs.price.value

    const item = { id: uuid.v4(), sku, text, price }

    // don't do anything if any field is left blank
    if (!item.sku || !item.text || !item.price) {
      return
    }

    this.props.itemActions.createItem(item)
    this.props.listActions.connectToList(this.props.listId, item.id)
    // reset the form after submission
    this.refs.itemForm.reset()
  }

  render() {
    const { ...props } = this.props

    return (
      <form ref="itemForm" onSubmit={this.handleSubmit}>
          <label>SKU</label>
          <input 
            type="text" 
            placeholder="SKU" 
            autoFocus={true}
            ref="sku" 
            value={this.props.sku}
            defaultValue={this.props.sku}
            onChange={this.handleItemSku}
          />

          <label>Item</label>
          <input 
            type="text"
            placeholder="Item" 
            autoFocus={true}
            ref="text" 
            value={this.props.text}
            defaultValue={this.props.text}
            onChange={this.handleItemText}
          />

          <label>Price</label>
          <input 
            type="text"
            placeholder="Price"
            autoFocus={true}
            ref="price" 
            value={this.props.price}
            defaultValue={this.props.price}
            onChange={this.handleItemPrice}
          />

        <button type="submit">{ this.state.isEditing ? 'Edit Item' : 'Add Item' }</button>
      </form>
    )
  }
}

export default ItemForm
