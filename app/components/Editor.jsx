import React from 'react'

export default class Editor extends React.Component {
  render() {
    const {value, onEdit, onValueClick, isEditing, ...props} = this.props

    return (
      <div {...props} >
        {isEditing ? this.renderEdit() : this.renderValue()}
      </div>
    )
  }

  renderEdit = () => {
    return (
      <input type="text"
        ref={(event) => event ? event.selectionStart = this.props.value.length : null}
        autoFocus={true}
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} 
      />
    )
  }

  renderValue = () => {
    const onDelete = this.props.onDelete

    return (
      <div onClick={this.props.onValueClick}>
        <span>{this.props.value}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    )
  }

  renderDelete = () => {
    return <button onClick={this.props.onDelete}>x</button>
  }

  checkEnter = (event) => {
    if(event.key === 'Enter') {
      this.finishEdit(event)
    }
  }

  finishEdit = (event) => {
    const value = event.target.value

    if(this.props.onEdit && value.trim()) {
      this.props.onEdit(value)
    }
  }
}
