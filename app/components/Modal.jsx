import React from 'react'

export default class Modal extends React.Component {
  render() {
     const styles = {
      modalIsOpen: {
        background: 'white',
        boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
        top: '0', right: '0', bottom: '0', left: '0',
        margin: '6% 0% 0% 40%',
        padding: '2em',
        transform: 'translate Y(0%)',
        transition: 'all 1s ease',
        width: '10%',
        height: '50%',
        position: 'absolute'
      },
      modalIsClosed: {
        display: 'none',
        transform: 'translate Y(-100%)',
        transition: 'all 1s ease'
      }
    }
    
    let modalStyles = this.props.openModal ? styles.modalIsOpen : styles.modalIsClosed;

    return <div style={modalStyles}>{this.props.children}</div>
  }
}
