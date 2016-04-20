import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'

class ItemForm extends React.Component {
  render() {
    const { fields: {id, sku, text, price}, handleSubmit, onEdit, destroyForm, closeModal } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>SKU</label>
          <input type='text' placeholder='00000000' {...sku}/>
          <div>{sku.touched ? sku.error : ''}</div>
        </div>

        <div>
          <label>Item</label>
          <input type='text' placeholder='item' {...text}/>
          <div>{text.touched ? text.error : ''}</div>
        </div>

        <div>
          <label>Price</label>
          <input type='text' placeholder='0.00' {...price}/>
          <div>{price.touched ? price.error : ''}</div>
        </div>
        { id && id.value ?
          <button 
            onClick={(e) => {
              e.preventDefault()
              onEdit(
                {
                  id: id.value,
                  sku: sku.value,
                  text: text.value,
                  price: price.value
                }
              )
              destroyForm()
              closeModal()
            }}>
            Update Item
          </button> :
          <button>
            Add Item
          </button>
        }
        <button onClick={(e) => {
          e.preventDefault()
          destroyForm()
          closeModal()}}>Cancel</button>
      </form>
    )
  }
}

export default ItemForm = reduxForm({
  form: 'items',
  fields: ['id', 'sku', 'text', 'price'],
  validate
})(ItemForm);
