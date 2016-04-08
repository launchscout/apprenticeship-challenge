import React from 'react'
import { App } from '../app/components/App'

describe('<App />', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.type()).toEqual('div')
  })

  it('contains a button and a class add-list', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.node.props.children[0].props.className).toEqual('add-list')
    expect(wrapper.node.props.children[0].type).toEqual('button')
  })
})
