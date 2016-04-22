import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'

class ItemForm extends React.Component {
  render() {
    const { 
      fields: {id, sku, text, price}, 
      handleSubmit, 
      onEdit, 
      destroyForm,
      closeModal 
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>SKU</label>
          <input className='input' type='text' placeholder='00000000' {...sku}/>
          <div className="error">{sku.touched ? sku.error : ''}</div>
        </div>

        <div>
          <label className='label'>Item</label>
          <input  className='input' type='text' placeholder='item' {...text}/>
          <div className="error">{text.touched ? text.error : ''}</div>
        </div>

        <div>
          <label className='label'>Price</label>
          <input  className='input' type='text' placeholder='0.00' {...price}/>
          <div className="error">{price.touched ? price.error : ''}</div>
        </div>
        { id && id.value ?
          <button 
            className="btn button button__form" 
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
          <button className="btn button button__form">Add Item</button>
        }
        <button 
          className="btn button button__form"
          onClick={(e) => {
            e.preventDefault()
            destroyForm()
            closeModal()}}>Cancel</button>
      </form>
    )
  }
}

export default ItemForm = reduxForm({
  form: 'items',
  fields: ['id', 'sku', 'text', 'price', 'checked'],
  validate
})(ItemForm);
