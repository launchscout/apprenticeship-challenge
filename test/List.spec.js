import React from 'react'
import { List } from '../app/components/List'

describe('<List />', () => {
  const items = [
    { id: 0, text: "New Item" },
    { id: 1, text: "New Item" }
  ]

  const list = [
    { id: 0, title: "New Shopping List",
      items: [ { id: 0 } ]
    }, {
      id: 1, title: "New Shopping List",
      items: [ { id: 1 } ]
    }
  ]

  const wrapper = shallow(<List list={list}/>)

  it('renders as a <div>', () => {

    expect(wrapper.type()).toEqual('div')
  })

  it('contains a class list-header', () => {

    expect(wrapper.find('list-header')).toExist
  })

  it('should have onClick props for list header', () => {

    expect(wrapper.node.props.children[0].props.onClick).toExist
  })

  it('should have a class list-add-item and a button +', () => {

    expect(wrapper.find('list-add-item')).toExist
    expect(wrapper.find('+')).toExist
    expect(wrapper.find('button').length).toBe(2)
  })

  it('should have onClick props for list-add-item', () => {

    expect(wrapper.node.props.children[0].props.children[0].props.onClick).toExist
  })

  it('should have a list-title class', () => {

    expect(wrapper.find('list-title')).toExist
  })

  it('should have isEditing, value and onEdit props', () => {
    let base = wrapper.node.props.children[0].props.children[1].props

    expect(base.isEditing).toExist
    expect(base.value).toExist
    expect(base.onEdit).toExist
  })

  it('should have a list-delete class and a x button', () => {
    let base = wrapper.node.props.children[0].props.children[2].props

    expect(wrapper.find('list-delete')).toExist
    expect(base.children.type).toEqual('button')
    expect(base.children.props.children).toEqual('x')
  })

  it('should have items, onValueClick, onEdit, onDelete, and onCheck props for Items', () => {
    let base = wrapper.node.props.children[1].props

    expect(base.items).toExist
    expect(base.onValueClick).toExist
    expect(base.onEdit).toExist
    expect(base.onDelete).toExist
    expect(base.onCheck).toExist
  })
})
