import React from 'react'
import { List } from '../app/components/List'
import store from '../app/stores/store'

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

  it('renders as a <div>', () => {
    const wrapper = shallow(<List list={list}/>)

    expect(wrapper.type()).toEqual('div')
  })

  it('contains a class list-header', () => {
    const wrapper = shallow(<List list={list}/>)

    expect(wrapper.node.props.children[0].props.className).toEqual('list-header')
  })

  it('should have onClick props for list header', () => {
    const wrapper = shallow(<List list={list}/>)

    expect(wrapper.node.props.children[0].props.onClick).toExist
  })

  it('should have a class list-add-item and a button +', () => {
    const wrapper = shallow(<List list={list}/>)
    let base = wrapper.node.props.children[0].props.children[0].props

    expect(base.className).toEqual('list-add-item')
    expect(base.children.props.children).toEqual('+')
    expect(base.children.type).toEqual('button')
  })

  it('should have onClick props for list-add-item', () => {
    const wrapper = shallow(<List list={list}/>)

    expect(wrapper.node.props.children[0].props.children[0].props.onClick).toExist
  })

  it('should have a list-title class', () => {
    const wrapper = shallow(<List list={list}/>)

    expect(wrapper.node.props.children[0].props.children[1].props.className).toEqual('list-title')
  })

  it('should have isEditing, value and onEdit props', () => {
    const wrapper = shallow(<List list={list}/>)
    let base = wrapper.node.props.children[0].props.children[1].props

    expect(base.isEditing).toExist
    expect(base.value).toExist
    expect(base.onEdit).toExist
  })

  it('should have a list-delete class and a x button', () => {
    const wrapper = shallow(<List list={list}/>)
    let base = wrapper.node.props.children[0].props.children[2].props

    expect(base.className).toEqual('list-delete')
    expect(base.children.type).toEqual('button')
    expect(base.children.props.children).toEqual('x')
  })

  it('should have items, onValueClick, onEdit, onDelete, and onCheck props for Items', () => {
    const wrapper = shallow(<List list={list}/>)
    let base = wrapper.node.props.children[1].props

    expect(base.items).toExist
    expect(base.onValueClick).toExist
    expect(base.onEdit).toExist
    expect(base.onDelete).toExist
    expect(base.onCheck).toExist
  })
})
