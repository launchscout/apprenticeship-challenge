import React from 'react'
import { reduxForm } from 'redux-form'

class ItemForm extends React.Component {
  render() {
    const { fields: {id, sku, text, price}, handleSubmit, onEdit, destroyForm } = this.props

    return (
      <form onSubmit={handleSubmit} >
        <label>SKU</label>
        <input type="text" {...sku}/>

        <label>Item</label>
        <input type="text" {...text} />

        <label>Price</label>
        <input type="text" {...price} />
        { id && id.value ?
          <button 
            onClick={(e) => {
              e.preventDefault()
              onEdit({id: id.value, sku: sku.value, text: text.value, price: price.value })
              this.props.destroyForm()
            }}
          >
            Update Item
          </button> :
          <button>
            Add Item
          </button>
        }
      </form>
    )
  }
}

ItemForm = reduxForm({
  form: 'items',
  fields: ['id', 'sku', 'text', 'price'],
})(ItemForm);

export default ItemForm
