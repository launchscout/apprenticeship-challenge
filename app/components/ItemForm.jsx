// import React from 'react'
// import uuid from 'node-uuid'

// class ItemForm extends React.Component {
  // constructor(props) {
    // super(props)

    // this.state = {
      // isEditing: false
    // }
  // }

  // handleSubmit = (event) => {
    // event.preventDefault()

    // let sku = this.refs.sku.value.trim()
    // let text = this.refs.text.value.trim()
    // let price = this.refs.price.value.trim()

    // const item = { id: uuid.v4(), sku, text, price }

    // // don't do anything if any field is left blank
    // if (!item.sku || !item.text || !item.price) { return }

    // this.props.itemActions.createItem(item)
    // this.props.listActions.connectToList(this.props.listId, item.id)
    // // reset the form after submission
    // this.refs.itemForm.reset()
  // }

  // render() {
    // const { ...props } = this.props

    // return (
      // <form ref="itemForm" onSubmit={this.handleSubmit}>
          // <label>SKU</label>
          // <input 
            // type="text" 
            // placeholder="SKU" 
            // autoFocus={true}
            // ref='sku'
            // defaultValue={this.props.sku}
            // onBlur={this.finishEdit}
            // onKeyPress={this.checkEnter}></input>

          // <label>Item</label>
          // <input 
            // type="text"
            // placeholder="Item" 
            // autoFocus={true}
            // ref='text'
            // defaultValue={this.props.text}
            // onBlur={this.finishEdit}
            // onKeyPress={this.checkEnter}></input>

          // <label>Price</label>
          // <input 
            // type="text"
            // placeholder="Price"
            // autoFocus={true}
            // ref='price'
            // defaultValue={this.props.price}
            // onBlur={this.finishEdit}
            // onKeyPress={this.checkEnter}></input>

        // <button type="submit">{ this.state.isEditing ? 'Edit Item' : 'Add Item' }</button>
      // </form>
    // )
  // }
// }

// export default ItemForm

import React from 'react'
import { reduxForm } from 'redux-form'

class ItemForm extends React.Component {
  render() {
    const { fields: {id, sku, text, price}, handleSubmit, onEdit } = this.props

    return (
      <form onSubmit={handleSubmit} >
        <label>SKU</label>
        <input type="text" {...sku}/>

        <label>Item</label>
        <input type="text" {...text} />

        <label>Price</label>
        <input type="text" {...price} />
        { id && id.value ? <button onClick={onEdit({id: id.value, sku: sku.value, text: text.value, price: price.value })} >Update Item</button> : <button>Add Item</button>}
      </form>
    )
  }
}

ItemForm = reduxForm({
  form: 'items',
  fields: ['id', 'sku', 'text', 'price']
})(ItemForm);

export default ItemForm
