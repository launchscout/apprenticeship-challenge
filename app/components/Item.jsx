import React from 'react';
import uuid from 'node-uuid'

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
  }

  render() {
    if(this.state.isEditing) {
      return this.renderEdit();
    }

    return this.renderItem();
  }

  // called in render()
  renderEdit = () => {
    return (
      <input type="text"
        ref={(event) => 
          // selectionStart specifies the index of the first selected character
          (event ? event.selectionStart = this.props.text.length : null)
        }
        autoFocus={true}
        defaultValue={this.props.text}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} 
      />
    )
  };

  renderDelete = () => {
    return <button onClick={this.props.onDelete}>x</button>;
  };

  // called in render()
  // normal state without editing
  renderItem = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span>{this.props.text}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };

  // called in renderItem div
  // if div is clicked start editing
  edit = () => {
    this.setState({
      isEditing: true
    });
  };

  // called in input
  // if enter is pressed finish editing
  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  // called in input
  // leave editing state
  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);

      this.setState({
        isEditing: false
      });
    }
  };
}
