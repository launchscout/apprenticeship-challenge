import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    // Keeps track of "editing" state.
    this.state = {
      editing: false
    };
  }

  render() {
    // Rendering the component differently based on state.
    if(this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  }

  renderEdit = () => {
    return (
      <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.item.length : null
      }
      autoFocus={true}
      defaultValue={this.props.item}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderNote = () => {
    // When user clicks a normal item, it triggers editing logic.
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="item">{this.props.item}</span>
        <span>SKU# {this.props.sku}</span>
        <span>Price {this.props.price}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };

  renderDelete = () => {
    return <button
      className="delete-note"
      onClick={this.props.onDelete}>remove</button>;
  };

  // Enter edit mode.
  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    // When user hits "enter", it finishes up.
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);

      // Exit edit mode.
      this.setState({
        editing: false
      });
    }
  };
}