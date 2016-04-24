import React from 'react'
import validate from '../app/validators/validate'

describe('validate', () => {
  it('should validate item', () => {
    const validItem = { sku: '00000000', text: 'This text', price: '1.00' }
    const message = validate(validItem)

    expect(message).toEqual({})
  })

  it('should return Enter a SKU error', () => {
    const item = { sku: '', text: 'text', price: '1.00'}
    const message = validate(item)

    expect(message).toEqual({ sku: 'Enter a SKU'})
  })

  it('should return sku is too short error', () => {
    const item = { sku: '00', text: 'text', price: '1.00'}
    const message = validate(item)

    expect(message).toEqual({ sku: 'SKU is too short'})
  })

  it('should return sku is too long error', () => {
    const item = { sku: '0000000000000000000000000', text: 'text', price: '1.00'}
    const message = validate(item)

    expect(message).toEqual({ sku: 'SKU is too long'})
  })

  it('should return Invalid SKU error', () => {
    const item = { sku: 'asdfasdfasdfaa', text: 'text', price: '1.00'}
    const message = validate(item)

    expect(message).toEqual({ sku: 'Invalid SKU'})
  })

  it('should return Enter an item error', () => {
    const item = { sku: '00000000', text: '', price: '1.00'}
    const message = validate(item)

    expect(message).toEqual({ text: 'Enter an item'})
  })

  it('should return Item is too long error', () => {
    const item = {
      sku: '00000000',
      text: 'This is a long text more than 20 characters for sure',
      price: '1.00'
    }

    const message = validate(item)

    expect(message).toEqual({ text: 'Item is too long'})
  })

  it('should return Enter a price error', () => {
    const item = { sku: '00000000', text: 'text', price: ''}
    const message = validate(item)

    expect(message).toEqual({ price: 'Enter a price'})
  })

  it('should return Invalid price error', () => {
    const item = { sku: '00000000', text: 'text', price: 'This'}
    const message = validate(item)

    expect(message).toEqual({ price: 'Invalid price'})
  })
})
