import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'

class ItemForm extends React.Component {
  render() {
    const { fields: {id, sku, text, price}, handleSubmit, onEdit, destroyForm } = this.props

    return (
      <form onSubmit={handleSubmit} >
        <div>
          <label>SKU</label>
          <input type="text" {...sku}/>
          <div>{sku.touched ? sku.error : ''}</div>
        </div>

        <div>
          <label>Item</label>
          <input type="text" {...text} />
          <div>{text.touched ? text.error : ''}</div>
        </div>

        <div>
          <label>Price</label>
          <input type="text" {...price} />
          <div>{price.touched ? price.error : ''}</div>
        </div>
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

export default ItemForm = reduxForm({
  form: 'items',
  fields: ['id', 'sku', 'text', 'price'],
  validate
})(ItemForm);
