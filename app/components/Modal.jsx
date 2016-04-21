import React from 'react'

export default class Modal extends React.Component {
  render() {
    let modalClass = this.props.openModal ? 'modalIsOpen' : 'modalIsClosed'

    return <div className={modalClass}>{this.props.children}</div>
  }
}
