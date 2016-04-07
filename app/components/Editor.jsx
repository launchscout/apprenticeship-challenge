import React from 'react'

export default class Editor extends React.Component {
  render() {
    const {item, value, onEdit, onValueClick, isEditing, onCheck, ...props} = this.props

    return (
      <div {...props} >
        {isEditing ? this.renderEdit() : this.renderValue()}
      </div>
    )
  }

  renderEdit = () => {
    return (
      <input
        type="text"
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
    const onCheck = this.props.onCheck
    const itemChecked = this.props.item
    const isChecked = {textDecoration: itemChecked ? 'line-through' : 'none'} 

    return (
      <div>
        {onCheck ? this.renderCheckItem() : null}
        <div onClick={this.props.onValueClick}>
          <span style={isChecked} className='value'>{this.props.value}</span>
          {onDelete && this.renderDelete()}
        </div>
      </div>
    )
  }

  renderCheckItem = () => {
    return (
      <input 
        type="checkbox"
        className='check-item'
        defaultChecked={false}
        onClick={this.props.onCheck}
      />
    )
  }

  renderDelete = () => {
    return <button className='delete' onClick={this.props.onDelete}>x</button>
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

const { func, string, bool } = React.PropTypes

Editor.propTypes = {
  value: string.isRequired,
  onEdit: func.isRequired,
  item: bool,
  isEditing: bool
}
